-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-05-2017 a las 18:14:11
-- Versión del servidor: 5.7.16
-- Versión de PHP: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `toroso`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `genInsertarSymbolHystory`(
    IN `vSymbol` VARCHAR(50), 
    IN `vName` VARCHAR(100), 
    IN `dPrice` double(10,5), 
    IN `dDayLow` double(10,5), 
    IN `dDayHigh` double(10,5), 
    IN `iVolume` bigint, 
    IN `dChange` double(10,5), 
    IN `vLastDateTrader` timestamp,
    OUT `vCompraSuperaResistencia` VARCHAR(100),
    OUT `vVentaSuperaSoporte` VARCHAR(100)
)
BEGIN
    DECLARE _start INT DEFAULT 0;
    DECLARE _limit1 INT DEFAULT 0;
    DECLARE _limit2 INT DEFAULT 0;
    DECLARE _change double(10,5) DEFAULT 0.0;
    DECLARE _price15minMax double(10,5) DEFAULT 0.0;
    DECLARE _price5MinutsMinBaja double(10,5) DEFAULT 0.0;
    
    
    
    DECLARE _nameDes VARCHAR(100) DEFAULT '';
    DECLARE _vLastDateTrader timestamp;
	DECLARE _vMaxDateCreated timestamp;
    DECLARE _countMaxToro INTEGER;
    DECLARE _countMaxOso INTEGER;
     DECLARE _countMaxToroRetroceso INTEGER;
    DECLARE _countMaxOsoRetroceso INTEGER;
    DECLARE var_apalancamiento INTEGER;
    
    
    
    SET _vLastDateTrader = vLastDateTrader;
    SET _limit1 = 0;
    SET _limit2 = 2;
 
 IF (NOT EXISTS(SELECT symbol FROM symbolHystory WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader )) THEN
	INSERT INTO  symbolHystory(symbol, nameDescripcion, price, daylow, dayhigh, volume, varChange, lastDateTrader, price5Minuts, price5MinutsMinBaja, price15minMax)
	VALUES (vSymbol, vName, dPrice, dDayLow, dDayHigh, iVolume, dChange, vLastDateTrader, dPrice, dPrice, dPrice);
 END IF;
 
 
 ##VALIDAR SI SUPERO RESISTENCIA Y SOPORTE
 
 SELECT varChange INTO _change FROM symbolHystory WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;
 #SELECT countMaxToro INTO _countMaxToro FROM symbolHystory WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;
 
 SELECT distinct(b.nameDescripcion) INTO _nameDes 
                FROM symbolHystory a
                INNER JOIN symbols b ON a.symbol = b.symbol
                WHERE b.symbol = vSymbol;
               
 #BAJA
 IF EXISTS(SELECT symbol, lastDateTrader FROM symbolHystory WHERE symbol = vSymbol AND dPrice < daylow and lastDateTrader >= DATE_SUB(_vLastDateTrader, INTERVAL 1 DAY) order by created_at desc) THEN
 #IF EXISTS(SELECT symbol, lastDateTrader FROM symbolHystory WHERE symbol = vSymbol AND dPrice < ((daylow + dayhigh)/2)  and lastDateTrader >= DATE_SUB(_vLastDateTrader, INTERVAL 1 DAY) order by created_at desc) THEN
 
       IF EXISTS(SELECT symbol, lastDateTrader FROM symbolHystory WHERE symbol = vSymbol AND dPrice < daylow and lastDateTrader = DATE_SUB(_vLastDateTrader, INTERVAL 1 DAY)  order by created_at desc) THEN
       #IF EXISTS(SELECT symbol, lastDateTrader FROM symbolHystory WHERE symbol = vSymbol AND dPrice < ((daylow + dayhigh)/2)  and lastDateTrader = DATE_SUB(_vLastDateTrader, INTERVAL 1 DAY)  order by created_at desc) THEN
			
             IF EXISTS(SELECT symbol, lastDateTrader FROM symbolHystory WHERE symbol = vSymbol AND dPrice < daylow and lastDateTrader = _vLastDateTrader  order by created_at desc) THEN
				      
                 IF (dChange <= 0) THEN
				        
						UPDATE symbolHystory
						SET price = dPrice, varChange = dChange, daylow = dDayLow, dayhigh = dDayHigh, countMaxOso = countMaxOso + 1
						WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;# and price <> dPrice;
                            
                        SELECT countMaxOso INTO _countMaxOso FROM symbolHystory WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;
 
						IF (_countMaxOso > 3) THEN
								SET vVentaSuperaSoporte = concat('VENTA symbol = ' , _nameDes , ' * Supero Soporte diario - variación: ' , dChange);
							
                            IF (_countMaxOso = 4) THEN
		
                                #INSERTAR MOVIMIENTO DE LA OPERACION
                                INSERT INTO  symbolHystoryTorOso(symbol, nameDescripcion, price, daylow, dayhigh, volume, varChange, lastDateTrader, price5Minuts, cantidadContratos, tipoOperacion)
								VALUES (vSymbol, vName, dPrice, dDayLow, dDayHigh, iVolume, dChange, vLastDateTrader, dPrice, 4000/dPrice, 'OSO' );
							END IF;
						END IF;
					
                /*ELSE
                
					UPDATE symbolHystory
					SET countMaxOso = countMaxOso - 1
					WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;# and price <> dPrice;
                */
                END IF;
            ELSE
				#SI SE GENERO TRANSACCION ENTONCES VALIDA RETROCESO
				IF EXISTS(SELECT symbol FROM symbolHystoryTorOso WHERE  symbol = vSymbol AND vLastDateTrader = lastDateTrader AND estatus = 'ACTIVO' AND tipoOperacion = 'OSO') THEN
					#Valida si hay retroceso en la baja
                    
					IF EXISTS(SELECT symbol, lastDateTrader FROM symbolHystory WHERE symbol = vSymbol AND dPrice > price5Minuts AND dPrice > price15minMax and  price5Minuts <> 0.00 and  price15minMax <> 0.00 and lastDateTrader = _vLastDateTrader  order by created_at desc) THEN
						
						UPDATE symbolHystory
						SET countMaxToroRetroceso = countMaxToroRetroceso + 1
						WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;# and price <> dPrice;
						
						SELECT countMaxToroRetroceso INTO _countMaxToroRetroceso FROM symbolHystory WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;
	 
							IF (_countMaxToroRetroceso > 6) THEN
									SET vCompraSuperaResistencia = concat('COMPRA symbol = ' , _nameDes , ' * RETROCESO - variación: ' , dChange);
									
									#Actualizar el precio de los 5 minutos
									UPDATE symbolHystory
									SET price5Minuts = dPrice
									WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader and price <> dPrice ;
                                    
                                    ##SEÑAL DE RETROCESO NOTORIO, ENTONCES VENDER la CARTERA
                                    
                                    ##AGREGAR STOP DE SALIDA
                                    /*UPDATE symbolHystoryTorOso
									SET estatus = 'CERRADOPORRETROCESO'
									WHERE symbol = vSymbol AND estatus = 'ACTIVO' AND lastDateTrader = vLastDateTrader AND tipoOperacion = 'OSO';
                                    */
                                    #REALIZAR COMPRA DE RETROCESO
                                    #INSERTAR MOVIMIENTO DE LA OPERACION
                                    IF (_countMaxToroRetroceso = 7) THEN
										INSERT INTO  symbolHystoryTorOso(symbol, nameDescripcion, price, daylow, dayhigh, volume, varChange, lastDateTrader, price5Minuts, cantidadContratos, tipoOperacion)
										VALUES (vSymbol, vName, dPrice, dDayLow, dDayHigh, iVolume, dChange, vLastDateTrader, dPrice, 4000/dPrice, 'TORORETROCESO' );
                                    END IF;
							END IF;

					END IF;
				END IF;
            /*ELSE
				SELECT MAX(updated_at) INTO _vMaxDateCreated FROM symbolHystoryMinuts  WHERE symbol = vSymbol;
				IF EXISTS(SELECT * FROM symbolHystoryMinuts WHERE symbol = vSymbol and price < dPrice and updated_at > DATE_SUB(_vMaxDateCreated,INTERVAL 15 MINUTE)  order by updated_at desc) THEN
						SET vVentaSuperaSoporte = concat('VENTA symbol = ' , _nameDes , ' * SALIDA - TENDENCIA CONTRARIA: ' , dChange);
				END IF;*/
			 END IF;
            
       END IF;
       
     
      
 END IF;
  
 #ALTA
 #IF EXISTS(SELECT symbol FROM symbolHystory WHERE symbol = vSymbol AND dPrice > ((daylow + dayhigh)/2) and lastDateTrader >= DATE_SUB(_vLastDateTrader, INTERVAL 1 DAY) order by created_at desc) THEN
 IF EXISTS(SELECT symbol FROM symbolHystory WHERE symbol = vSymbol AND dPrice > dayhigh and lastDateTrader >= DATE_SUB(_vLastDateTrader, INTERVAL 1 DAY) order by created_at desc) THEN
	
     #IF EXISTS(SELECT symbol FROM symbolHystory WHERE symbol = vSymbol AND dPrice > ((daylow + dayhigh)/2) and lastDateTrader = DATE_SUB(_vLastDateTrader, INTERVAL 1 DAY) order by created_at desc) THEN
	 IF EXISTS(SELECT symbol FROM symbolHystory WHERE symbol = vSymbol AND dPrice > dayhigh and lastDateTrader = DATE_SUB(_vLastDateTrader, INTERVAL 1 DAY) order by created_at desc) THEN
		
        IF EXISTS(SELECT symbol FROM symbolHystory WHERE symbol = vSymbol AND dPrice > dayhigh and lastDateTrader = _vLastDateTrader order by created_at desc) THEN
			
            IF (dChange >= 0) THEN	
			   
					UPDATE symbolHystory
					SET price = dPrice, varChange = dChange, daylow = dDayLow, dayhigh = dDayHigh, countMaxToro = countMaxToro + 1
					WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;# and price <> dPrice;
                    
                    SELECT countMaxToro INTO _countMaxToro FROM symbolHystory WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;
  
						IF (_countMaxToro > 3) THEN
								SET vCompraSuperaResistencia = concat('COMPRA : ', vSymbol, ' -- symbol = ' ,_nameDes, ' * Supero Resistencia diario - variación: ' , dChange);
                        
							IF (_countMaxToro = 4) THEN
						
                                #INSERTAR MOVIMIENTO DE LA OPERACION
                                INSERT INTO  symbolHystoryTorOso(symbol, nameDescripcion, price, daylow, dayhigh, volume, varChange, lastDateTrader, price5Minuts, cantidadContratos, tipoOperacion)
								VALUES (vSymbol, vName, dPrice, dDayLow, dDayHigh, iVolume, dChange, vLastDateTrader, dPrice, 4000/dPrice, 'TORO' );
							END IF;
                        END IF;
            /*ELSE 
				UPDATE symbolHystory
				SET countMaxToro = countMaxToro - 1
				WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;# and price <> dPrice;
              */      
			ELSE
				#SI SE GENERO TRANSACCION ENTONCES VALIDA RETROCESO
				IF EXISTS(SELECT symbol FROM symbolHystoryTorOso WHERE  symbol = vSymbol AND vLastDateTrader = lastDateTrader AND estatus = 'ACTIVO' AND tipoOperacion = 'TORO') THEN
					#Valida si hay retroceso en la ALTA
                    
					IF EXISTS(SELECT symbol, lastDateTrader FROM symbolHystory WHERE symbol = vSymbol AND dPrice < price5Minuts AND dPrice < price5MinutsMinBaja AND price5Minuts <> 0.0 AND  price5MinutsMinBaja <> 0.00 and lastDateTrader = _vLastDateTrader  order by created_at desc) THEN
						
						UPDATE symbolHystory
						SET countMaxOsoRetroceso = countMaxOsoRetroceso + 1
						WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;# and price <> dPrice;
						
						SELECT countMaxOsoRetroceso INTO _countMaxOsoRetroceso FROM symbolHystory WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;
	 
							IF (_countMaxOsoRetroceso > 6) THEN
									SET vCompraSuperaResistencia = concat('VENTA symbol = ' , _nameDes , ' * RETROCESO - variación: ' , dChange);
									#price5MinutsMinBaja, price15minMax
									#Actualizar el precio de los 5 minutos
									UPDATE symbolHystory
									SET price5Minuts = dPrice
									WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader and price <> dPrice ;
                                    
                                    ##SEÑAL DE RETROCESO NOTORIO, ENTONCES VENDER la CARTERA
                                    ##VALIDAR EL STOP DE SALIDA SI ALCANZO EL MAXIMO PERDIDA DEL DIA SALIR Y CERRAR POSICION
                                    /*
                                    UPDATE symbolHystoryTorOso
									SET estatus = 'CERRADOPORRETROCESO'
									WHERE symbol = vSymbol AND estatus = 'ACTIVO' AND lastDateTrader = vLastDateTrader AND tipoOperacion = 'TORO';
                                    */
                                    #REALIZAR VENTA DE RETROCESO
                                    #INSERTAR MOVIMIENTO DE LA OPERACION
                                    IF (_countMaxOsoRetroceso = 7) THEN
										INSERT INTO  symbolHystoryTorOso(symbol, nameDescripcion, price, daylow, dayhigh, volume, varChange, lastDateTrader, price5Minuts, cantidadContratos, tipoOperacion)
										VALUES (vSymbol, vName, dPrice, dDayLow, dDayHigh, iVolume, dChange, vLastDateTrader, dPrice, 4000/dPrice, 'OSORETROCESO' );
                                    END IF;
							END IF;

					END IF;
				END IF;
                ##
			END IF;

		END IF;
     END IF;
    
       
 END IF;
 
 #ACTUALIZAR PRECIO 
 
 UPDATE symbolHystory
 SET price = dPrice
 WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader and price <> dPrice;
  
 #ACTUALIZAR PRECIO DE HOY CADA 5 MIN 
 IF (DATE_FORMAT(NOW( ), "%i" ) % 5 = 0) THEN
	/*UPDATE symbolHystory
	SET varChange = dChange, daylow = dDayLow, dayhigh = dDayHigh
	WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader and price <> dPrice;
    */
    INSERT INTO  symbolHystoryMinuts(symbol, timeInterval, nameDescripcion, price, daylow, dayhigh, volume, varChange, lastDateTrader)
	VALUES (vSymbol, '5M', vName, dPrice, dDayLow, dDayHigh, iVolume, dChange, vLastDateTrader);
    
    #Actualizar el precio de hace 5 minutos
    
    SELECT MAX(price) INTO _price15minMax from symbolHystoryMinuts where symbol = vSymbol and created_at > DATE_SUB(NOW(),INTERVAL 60 MINUTE);
    SELECT MIN(price) INTO _price5MinutsMinBaja from symbolHystoryMinuts where symbol = vSymbol and created_at > DATE_SUB(NOW(),INTERVAL 60 MINUTE);
    
    UPDATE symbolHystory
	SET price5Minuts = dPrice, price15minMax = _price15minMax, price5MinutsMinBaja = _price5MinutsMinBaja #dPrice
	WHERE symbol = vSymbol AND vLastDateTrader = lastDateTrader;
    
    #Actualizar el precio close de la operacion
    
    UPDATE symbolHystoryTorOso
    SET priceClose = dPrice, totalGananciaPerdida = (dPrice - price) * cantidadContratos
    WHERE symbol = vSymbol AND estatus = 'ACTIVO';
    
    UPDATE symbolHystoryTorOso
    SET estatus = 'CERRADO'
    WHERE symbol = vSymbol AND estatus = 'ACTIVO' AND DATEDIFF(NOW(), lastDateTrader) >= 3 ;
    
    #CERRAR LAS OPERACIONES DE RETROCESO EN 4 HORAS
    
    UPDATE symbolHystoryTorOso
    SET estatus = 'CERRADO'                             #decia 240 MINUTS
    WHERE symbol = vSymbol AND estatus = 'ACTIVO' AND tipoOperacion in ('TORORETROCESO','OSORETROCESO') AND created_at > DATE_SUB(NOW(),INTERVAL 60 MINUTE);
		
	##SI ES DOMINGO INICIALIZA EL DÍA
	#IF ((SELECT DiaEnLetras(current_date()) = 'Domingo')) THEN
		#update symbolHystory 
		#set lastDateTrader = current_date()-1 
		#where lastDateTrader = current_date()-2;
    #END IF;
    
    #CERRAR STOP DE PERDIDAS
    
    SELECT apalancamiento INTO var_apalancamiento FROM symbols a WHERE a.symbol = vSymbol ;

	UPDATE symbolHystoryTorOso
	SET estatus = 'CERRADOPORSTOPPERDIDAS'
 	WHERE symbol = vSymbol AND tipoOperacion in ('OSO', 'OSORETROCESO')  AND ((priceClose-price) * cantidadContratos * var_apalancamiento ) > 3000 AND totalGananciaPerdida > 0 AND estatus = 'ACTIVO';

	UPDATE symbolHystoryTorOso
	SET estatus = 'CERRADOPORSTOPPERDIDAS'
	WHERE symbol = vSymbol AND tipoOperacion in ('TORO', 'TORORETROCESO')  AND ((priceClose-price) * cantidadContratos * var_apalancamiento ) < -3000.00 AND totalGananciaPerdida < 0 AND estatus = 'ACTIVO';
    
 END IF;  
 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getOportunity`(
    IN cadenaWhere varchar(1000))
BEGIN

DECLARE stmt varchar(1000);

    SET @ss=CONCAT('select tipoOperacion,a.totalGananciaPerdida, b.symbol, nameDescripcionEnglish from symbolHystoryTorOso a INNER JOIN symbols b ON a.symbol = b.symbol where a.created_at > DATE_SUB(NOW(),INTERVAL 4 DAY) AND mostrarMensaje = "SI" ', '');
    PREPARE stmt FROM @ss;
    EXECUTE stmt;
    
   UPDATE symbolHystoryTorOso SET mostrarMensaje = 'NO' 
   WHERE created_at > DATE_SUB(NOW(),INTERVAL 4 DAY) AND mostrarMensaje = 'SI' ;
    #DALLOCATE PREPARE stmt;
END$$

--
-- Funciones
--
CREATE DEFINER=`root`@`localhost` FUNCTION `DiaEnLetras`(
pfecha DATE
) RETURNS varchar(10) CHARSET latin1
BEGIN
DECLARE Dia varchar(10);
SELECT
CONCAT(ELT(WEEKDAY( PFECHA ) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'))
into Dia;
RETURN Dia;
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `fun_guardarsymbolhystory`(`vSymbol` VARCHAR(50), `vName` VARCHAR(100), `dPrice` double(7,2), `dDayLow` double(7,2), `dDayHigh` double(7,2), `iVolume` int, `dChange` double(7,2), `lastDateTrader` VARCHAR(11) ) RETURNS text CHARSET ascii
    NO SQL
BEGIN
  DECLARE _start BIGINT DEFAULT 0;

  INSERT INTO  symbolHystory(symbol, nameDescripcion, price, daylow, dayhigh, volume, varChange, lastDateTrader)
VALUES (vSymbol, vName, dPrece, dDayLow, dDatHigh, iVolume, vLastDateTrader);
  
  SET _start = (SELECT @@identity AS id);
  
  RETURN LPAD(_start,5,'0');
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `analysSymbol`
--

CREATE TABLE IF NOT EXISTS `analysSymbol` (
  `id` int(11) unsigned NOT NULL COMMENT 'Id de la tabla',
  `symbol` varchar(50) NOT NULL COMMENT 'Symbolo del Instrumento financiero',
  `timeInterval` enum('5M','15M','30M','4H','1D','1W') NOT NULL DEFAULT '5M' COMMENT 'Tiempo de Intervalo',
  `tendencia` enum('TORO','OSO','NEUTRAL') NOT NULL DEFAULT 'NEUTRAL' COMMENT 'Tiempo de Intervalo',
  `daylow` double(7,2) NOT NULL COMMENT 'Precio Bajo del dia',
  `dayhigh` double(7,2) NOT NULL COMMENT 'Precio alto del dia-',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Este campo es para llevar control de cuando se creo el registro',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Campo para saber cuando se modifico el registro'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `symbolHystory`
--

CREATE TABLE IF NOT EXISTS `symbolHystory` (
  `id` int(11) unsigned NOT NULL COMMENT 'Id de la tabla',
  `symbol` varchar(50) NOT NULL COMMENT 'Symbolo del Instrumento financiero',
  `nameDescripcion` varchar(100) NOT NULL COMMENT 'Descripcion del Symbolo del Instrumento financiero',
  `price` double(10,5) DEFAULT NULL,
  `daylow` double(10,5) DEFAULT NULL,
  `dayhigh` double(10,5) DEFAULT NULL,
  `volume` bigint(20) DEFAULT NULL,
  `varChange` double(10,5) DEFAULT NULL,
  `lastDateTrader` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha última de la transaccion',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Este campo es para llevar control de cuando se creo el registro',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Campo para saber cuando se modifico el registro',
  `countMaxToroRetroceso` int(11) NOT NULL DEFAULT '1' COMMENT 'Número de topes maximo superados de la resistencia',
  `countMaxOsoRetroceso` int(11) NOT NULL DEFAULT '1' COMMENT 'Número de topes maximo superados del soporte',
  `price5Minuts` double(10,5) NOT NULL DEFAULT '0.00000' COMMENT 'Precio cada 5 minutos del instrumento financiero',
  `price5MinutsMinBaja` double(10,5) NOT NULL DEFAULT '0.00000' COMMENT 'Precio minimo a la baja cada 5 minutos del instrumento financiero ',
  `price15minMax` double(10,5) NOT NULL DEFAULT '0.00000' COMMENT 'Precio minimo a la baja cada 5 minutos del instrumento financiero '
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `symbolHystoryMinuts`
--

CREATE TABLE IF NOT EXISTS `symbolHystoryMinuts` (
  `id` int(11) unsigned NOT NULL COMMENT 'Id de la tabla',
  `symbol` varchar(50) NOT NULL COMMENT 'Symbolo del Instrumento financiero',
  `timeInterval` enum('5M','15M','30M','4H','1D','1W') NOT NULL DEFAULT '5M' COMMENT 'Tiempo de Intervalo',
  `nameDescripcion` varchar(100) NOT NULL COMMENT 'Descripcion del Symbolo del Instrumento financiero',
  `price` double(10,5) DEFAULT NULL,
  `daylow` double(10,5) DEFAULT NULL,
  `dayhigh` double(10,5) DEFAULT NULL,
  `volume` bigint(20) DEFAULT NULL,
  `varChange` double(10,5) DEFAULT NULL,
  `lastDateTrader` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha última de la transaccion',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Este campo es para llevar control de cuando se creo el registro',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Campo para saber cuando se modifico el registro'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `symbolHystoryTorOso`
--

CREATE TABLE IF NOT EXISTS `symbolHystoryTorOso` (
  `id` int(11) unsigned NOT NULL COMMENT 'Id de la tabla',
  `symbol` varchar(50) NOT NULL COMMENT 'Symbolo del Instrumento financiero',
  `nameDescripcion` varchar(100) NOT NULL COMMENT 'Descripcion del Symbolo del Instrumento financiero',
  `price` double(10,5) DEFAULT NULL,
  `priceClose` double(10,5) DEFAULT NULL,
  `daylow` double(10,5) DEFAULT NULL,
  `dayhigh` double(10,5) DEFAULT NULL,
  `volume` bigint(20) DEFAULT NULL,
  `varChange` double(10,5) DEFAULT NULL,
  `lastDateTrader` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha última de la transaccion',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Este campo es para llevar control de cuando se creo el registro',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Campo para saber cuando se modifico el registro',
  `countMaxToro` int(11) NOT NULL DEFAULT '1' COMMENT 'Número de topes maximo superados de la resistencia',
  `countMaxOso` int(11) NOT NULL DEFAULT '1' COMMENT 'Número de topes maximo superados del soporte',
  `countMaxToroRetroceso` int(11) NOT NULL DEFAULT '1' COMMENT 'Número de topes maximo superados de la resistencia',
  `countMaxOsoRetroceso` int(11) NOT NULL DEFAULT '1' COMMENT 'Número de topes maximo superados del soporte',
  `price5Minuts` double(10,5) NOT NULL DEFAULT '0.00000' COMMENT 'Precio cada 5 minutos del instrumento financiero',
  `idUsuario` int(10) unsigned NOT NULL COMMENT 'Usuario de la transaccion',
  `cantidadContratos` int(10) unsigned NOT NULL COMMENT 'Contratos a transaccionar : Resultado de divir 4000 / price para obtener el numero de contratos a comprar/vender',
  `tipoOperacion` enum('TORO','OSO','','TORORETROCESO','OSORETROCESO') NOT NULL DEFAULT '' COMMENT 'Tipo de operacion a realizar en la transaccion',
  `estatus` enum('ACTIVO','CERRADO','CERRADOPORRETROCESO','CERRADOPORSTOPPERDIDAS') NOT NULL DEFAULT 'ACTIVO' COMMENT 'Estatus de la operación',
  `totalGananciaPerdida` double(10,5) NOT NULL DEFAULT '0.00000' COMMENT 'Total del resultado de la operaición',
  `mostrarMensaje` varchar(100) NOT NULL DEFAULT 'SI' COMMENT 'Estatus de la opción a mostrar en en front'
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `symbols`
--

CREATE TABLE IF NOT EXISTS `symbols` (
  `id` int(11) unsigned NOT NULL COMMENT 'Id de la tabla',
  `symbol` varchar(50) NOT NULL COMMENT 'Symbolo del Instrumento financiero',
  `nameDescripcion` varchar(100) NOT NULL COMMENT 'Descripcion del Symbolo del Instrumento financiero',
  `apalancamiento` int(10) unsigned NOT NULL COMMENT 'Apalancamiento',
  `nameDescripcionEnglish` varchar(100) NOT NULL DEFAULT '' COMMENT 'Descripcion del Symbolo del Instrumento financiero en ingles'
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `symbols`
--

INSERT INTO `symbols` (`id`, `symbol`, `nameDescripcion`, `apalancamiento`, `nameDescripcionEnglish`) VALUES
(1, 'BZ=F', 'Petróleo Brent', 152, 'Brent Oil'),
(2, 'NG=F', 'Gas Natural', 152, 'Natural Gas'),
(3, 'SI=F', 'Plata', 152, 'Silver'),
(4, 'EURUSD=X', 'EUR/USD', 300, 'EUR/USD'),
(5, 'CL=F', 'Petróleo', 152, 'Oil'),
(6, 'JPY=X', 'USD/JPY', 300, 'USD/JPY'),
(7, '^N225', 'Japón 225', 300, 'Japan 225'),
(8, 'MSFT', 'Microsoft', 10, 'Microsoft'),
(9, '^GSPC', 'ES EE.UU 500', 300, 'USA 500'),
(10, 'AUDJPY=X', 'AUD/JPY', 200, 'AUD/JPY'),
(11, 'AAPL', 'Apple', 10, 'Apple'),
(12, 'GC=F', 'Oro', 152, 'Gold'),
(13, 'CX', 'CEMEX', 10, 'Cemex'),
(14, 'KO', 'Coca cola', 10, 'Coca Cola'),
(15, 'FB', 'Facebook', 10, 'Facebook'),
(16, 'AMZN', 'Amazon', 10, 'Amazon'),
(17, 'NFLX', 'Netflix', 10, 'Netflix'),
(18, 'NKE', 'Nike', 10, 'Nike'),
(19, 'QQQ', 'QQQ', 100, 'QQQ'),
(20, 'WMT', 'Wal-mart', 5, 'Wal-Mart'),
(21, 'YHOO', 'YAHOO', 10, 'Yahoo!'),
(22, 'TWTR', 'Twitter', 5, 'Twitter'),
(23, 'GBPUSD=X', 'GBP/USD', 300, 'AUD/USD'),
(24, 'SNAP', 'Snapshap', 10, 'Snap'),
(25, 'PA%3DF', 'Paladio', 152, 'Palladium');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `analysSymbol`
--
ALTER TABLE `analysSymbol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `symbolHystory`
--
ALTER TABLE `symbolHystory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_symbol` (`symbol`) USING BTREE,
  ADD KEY `idx_symbolHystory_price` (`price`) USING BTREE,
  ADD KEY `idx_symbolHystory_daylow` (`daylow`) USING BTREE,
  ADD KEY `idx_symbolHystory_dayhigh` (`dayhigh`) USING BTREE,
  ADD KEY `idx_symbolHystory_lastDateTrader` (`lastDateTrader`) USING BTREE,
  ADD KEY `idx_symbolHystory_created_at` (`created_at`) USING BTREE,
  ADD KEY `idx_symbolHystory_price5MinutsMinBaja` (`price5MinutsMinBaja`) USING BTREE;

--
-- Indices de la tabla `symbolHystoryMinuts`
--
ALTER TABLE `symbolHystoryMinuts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_symbolHystoryMinutos_symbol` (`symbol`) USING BTREE,
  ADD KEY `idx_symbolHystoryMinutos_timeInterval` (`timeInterval`) USING BTREE,
  ADD KEY `idx_symbol` (`symbol`) USING BTREE,
  ADD KEY `idx_symbolHystoryMinuts_price` (`price`) USING BTREE,
  ADD KEY `idx_symbolHystoryMinuts_daylow` (`daylow`) USING BTREE,
  ADD KEY `idx_symbolHystoryMinuts_dayhigh` (`dayhigh`) USING BTREE,
  ADD KEY `idx_symbolHystoryMinuts_lastDateTrader` (`lastDateTrader`) USING BTREE,
  ADD KEY `idx_symbolHystoryMinuts_created_at` (`created_at`) USING BTREE;

--
-- Indices de la tabla `symbolHystoryTorOso`
--
ALTER TABLE `symbolHystoryTorOso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_symbol` (`symbol`) USING BTREE,
  ADD KEY `idx_symbolHystoryTorOso_price` (`price`) USING BTREE,
  ADD KEY `idx_symbolHystoryTorOso_daylow` (`daylow`) USING BTREE,
  ADD KEY `idx_symbolHystoryTorOso_dayhigh` (`dayhigh`) USING BTREE,
  ADD KEY `idx_symbolHystoryTorOso_lastDateTrader` (`lastDateTrader`) USING BTREE,
  ADD KEY `idx_symbolHystoryTorOso_created_at` (`created_at`) USING BTREE,
  ADD KEY `idx_symbolHystoryTorOso_tipoOperacion` (`tipoOperacion`) USING BTREE;

--
-- Indices de la tabla `symbols`
--
ALTER TABLE `symbols`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_symbol` (`symbol`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `analysSymbol`
--
ALTER TABLE `analysSymbol`
  MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id de la tabla';
--
-- AUTO_INCREMENT de la tabla `symbolHystory`
--
ALTER TABLE `symbolHystory`
  MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id de la tabla';
--
-- AUTO_INCREMENT de la tabla `symbolHystoryMinuts`
--
ALTER TABLE `symbolHystoryMinuts`
  MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id de la tabla';
--
-- AUTO_INCREMENT de la tabla `symbolHystoryTorOso`
--
ALTER TABLE `symbolHystoryTorOso`
  MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id de la tabla',AUTO_INCREMENT=101;
--
-- AUTO_INCREMENT de la tabla `symbols`
--
ALTER TABLE `symbols`
  MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Id de la tabla',AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
