//Script Flujo Completo Escenario: Tipo Cliente Cl�sico, Seguro Club 100, Con TAE, Tipo Pago Cheque

/*

ASI SE EJECUTA LA PRUEBA AUTOMATIZADA CON NIGHWATCH

node nightwatch.js -t test/TorOsoTest.js


*/

var var_symbol = "EUR/USD";
var listSymbolsOportunidades;


function myFunc2 (browser) {
  console.log('****************++ arg was *********************** => ');


                      browser                
                        .pause(1000)

                        .useXpath().click("//*[contains(text(), 'Microsoft')]")
                            
                        .pause(5000);

                        console.log("Iniciar LOG - while");

                        browser
                        .pause(5000);  

  //setTimeout(myFunc, 15000, 'funky');

}

function myFunc (arg) {
  console.log('****************++ arg was *********************** => ' + arg);

  //setTimeout(myFunc, 15000, 'funky');

}

function cazarTorOso(){

   
  //DECLARACION DE VARIABLES
  
  //var var_symbol = "EUR/USD";
  var conexionTorOso = require('./conexion_mysql/app.js');
    var express = require('express');
      var session = require('express-session');
      var app = express();

     var contador = 2;
       var listadoOportunidades;
       var toroso;
       listSymbolsOportunidades = null;
           
           app.set('port', 5000);

           while (contador < 4) {
            console.log("Entro while");
            contador = contador + 1;
          
            if (contador == 1){
              console.log("ES UNOOOOOO");
            }

            //CONSULTA A BD

            var query = 'SELECT 1 + 1 AS solution';
            var data = 123;
            var r = conexionTorOso.demo(query, function(result) { 
              rows = result; 

            console.log("RES = " + result) 


            for (var i = 0; i < rows[0].length; i++) {
                    console.log(rows[0][i].tipoOperacion + ' SYMBOL = ' + rows[0][i].symbol);


                    if (rows[0][i].tipoOperacion=="TORO"){
                        console.log("Entro a TORO (COMPRAR)");
                        data = 22222222222222222;

                        var_symbol = rows[0][0].symbol;
 
                    // all environments
                    app.set('port', 3000);

                    }
                    else
                    if (rows[0][i].tipoOperacion=="OSO"){
                        console.log("Entro a OSO (VENDER)");   
                    }

                    listSymbolsOportunidades = rows;



            };


          }
          );

      } //WHILE

}

//setTimeout(myFunc, 15000, 'funky');

module.exports = {



'INICIOOO CICLO': function(browser){


  cazarTorOso();

},

'Demo test TorOso Inversor BOT 2' : function (browser) {

  //inicio del ciclo

    browser
      .url('https://app.plus500.com/')
      .waitForElementVisible('body', 1000);
  
  console.log("ENTRO A LOGUEARSE");

  browser
  
      .waitForElementVisible('#demoMode',2000)
      
      .click('#demoMode')

      .waitForElementVisible('#newUserCancel',2000)
      .click('#newUserCancel')
      .pause(1000)

      .waitForElementVisible('input[type=text]', 1000)
      .setValue('input[type=text]', 'inversionlazalde@gmail.com')
      
      
      .setValue('input[type=password]', 'Daniel9238')
      
      .click('#submitLogin')
      

      .pause(10000);


  console.log("Seleccionar la opción FAVORITOS : ");
  //console.log( 'DataPUERTO UUUUUUUUUUUUUERTOOOOO : ' + app.get('port') );

 browser

  .pause(5000)

  .waitForElementVisible('#mainCategoriesRepeater  li:nth-child(1) ul li:last-child a', 1000)
  .click('#mainCategoriesRepeater  li:nth-child(1) ul li:last-child a');

  var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
  'Demo test TorOso Inversor BOT 1222-cazar' : function (browser) {
      cazarTorOso();
  },
  'Demo test TorOso Inversor BOT 1222' : function (browser) {
    

    var conexionTorOso = require('./conexion_mysql/app.js');

  },//Demo test
  'Demo test TorOso Inversor BOT 122222222-cazar' : function (browser) {
        cazarTorOso();

  },

   'Demo test TorOso Inversor BOT 122222222-cazar 2' : function (browser) {
    browser                
                            .pause(1000);
  },
  'Demo test TorOso Inversor BOT 122222222' : function (browser) {

  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );
   

  },//Demo test
  

//****************************************************************************************************

//Demo test
  'Demo test TorOso Inversor BOT DOSSSSSSSSSSS-cazar2' : function (browser) {
      cazarTorOso();

    browser
        .pause(35000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR DOSSSSSSSSSSSS -2' : function (browser) {

    var conexionTorOso = require('./conexion_mysql/app.js');

    browser
      .pause(5000);

 
      conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
  

  //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT TREESSSSS 1222-cazar-3' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR TREESSSSS 122222222-3' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test


   //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT CUATRO 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR CUATRO' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 5 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 5' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 6 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 6' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 7 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 7' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 8 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 8' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 9 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 9' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 10 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 10' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 11 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 11' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 12 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 12' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 13 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 13' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 14 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 14' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 15 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 15' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 16 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 16' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 17 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 17' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 18 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 18' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 19 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 19' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 20 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 20' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 21 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 21' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 22 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 22' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 23 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 23' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 24 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 24' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 25 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 25' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 26 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 26' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 27 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 27' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 28 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 28' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 29 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 29' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
 //************************************************************************************************************

  //Demo test
  'Demo test TorOso Inversor BOT 30 1222-cazar' : function (browser) {
      cazarTorOso();

    browser
        .pause(40000);  
  },
  'Demo test TorOso Inversor BOT EJECUTAR 30' : function (browser) {
  
    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

    browser
        .pause(5000);  

  },//Demo test
    
  
  
};
