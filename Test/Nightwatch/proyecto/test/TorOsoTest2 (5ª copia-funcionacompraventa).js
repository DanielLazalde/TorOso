//Script Flujo Completo Escenario: Tipo Cliente Cl�sico, Seguro Club 100, Con TAE, Tipo Pago Cheque

/*

ASI SE EJECUTA LA PRUEBA AUTOMATIZADA CON NIGHWATCH

node nightwatch.js -t test/TorOsoTest.js


<div class="instrument green-change win-disposable selected" data-instrument-id="289" id="_win_bind1050">
                                          <div class="name">
                                                <span class="drag"></span>
                                                <span id="_win_bind1051" class="">Spain 35</span>
                                          </div>
                                          <div class="change" id="_win_bind1052">1.84 %</div>
                                          <div class="sell" data-no-trading="false" id="_win_bind1053">11,184</div>
                                          <div class="short-button">
                                                <button class="buySellButton" id="_win_bind1054">Short</button>
                                          </div>
                                          <div class="buy" data-no-trading="false" id="_win_bind1055">11,195</div>
                                          <div class="buy-button">
                                                <button class="buySellButton" id="_win_bind1056">Buy</button>
                                          </div>
                                          <div class="high-low"><span id="_win_bind1057" class="no-trading">Market is closed</span></div>
                                          <div class="actions">
                                                <a id="_win_bind1058" class="add-favorite icon-star-o"></a>
                                                <a id="_win_bind1059" class="set-price-alert icon-bell-o"></a>
                                          </div>
                                          <div class="information"><button class="open-info icon-info-circle" id="_win_bind1060"></button></div>
                                          <div class="positions win-repeater win-disposable" id="_win_bind1061">
                                
                                          </div>
                                          <div class="orders win-repeater win-disposable" id="_win_bind1062">
                                                
                                          </div>
                                    </div>


                                    .waitForElementVisible('a[data-instrument-id=289]', 10000)


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
      .setValue('input[type=text]', 'inversionlazalde01@gmail.com')
      
      
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
/*
  if (listSymbolsOportunidades!=null){
   for (var i = 0; i < listSymbolsOportunidades[0].length; i++) {
                    console.log(listSymbolsOportunidades[0][i].tipoOperacion + ' SYMBOL OPORTUNIDAD = ' + listSymbolsOportunidades[0][i].symbol);


                    if (listSymbolsOportunidades[0][i].tipoOperacion=="TORO"){
                        console.log("Entro a TORO (COMPRAR)");                       
                   
                      browser                
                        .pause(1000)

                        .useXpath().click("//*[contains(text(), '" + listSymbolsOportunidades[0][i].nameDescripcionEnglish + "')]")
                            
                        .pause(5000);

                        console.log("Iniciar LOG - while");

                        browser
                        .pause(5000);  


                    }
                    else
                    if (listSymbolsOportunidades[0][i].tipoOperacion=="OSO"){
                        console.log("Entro a OSO (VENDER)");   
                    }

            };    

  } 
  else{

           browser
              .pause(15000)

              .useXpath().click("//*[contains(text(), 'Microsoft')]")
      
              .pause(5000);

    } */
            //console.log( 'Data : ' + r);
              //          console.log( 'DataPUERTO : ' + app.get('port') );



            //toroso = conexionTorOso.query();

            //listadoOportunidades = toroso; 

            //console.log("RESULTADO = " + listadoOportunidades);

            /*
              for (var i = 0; i < toroso[0].length; i++) {
                    console.log(toroso[0][i].tipoOperacion + ' SYMBOL = ' + toroso[0][i].symbol);


                    if (toroso[0][i].tipoOperacion=="TORO"){
                        console.log("Entro a TORO (COMPRAR)");
                    }
                    else
                    if (toroso[0][i].tipoOperacion=="OSO"){
                        console.log("Entro a OSO (VENDER)");   
                    }


            };
           */
         

    browser
        .pause(5000);  

       //   } //WHILE


  },//Demo test
  'Demo test TorOso Inversor BOT 1222-cazar' : function (browser) {
      cazarTorOso();
  },
  'Demo test TorOso Inversor BOT 1222' : function (browser) {
    

    var conexionTorOso = require('./conexion_mysql/app.js');

   // conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

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
  'Demo test TorOso Inversor BOT 1222222222222222222' : function (browser) {

    cazarTorOso();

    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

  },//Demo test
  'Demo test TorOso Inversor BOT 12222222222222222223333' : function (browser) {

    cazarTorOso();

    var conexionTorOso = require('./conexion_mysql/app.js');

    conexionTorOso.favoritosselected(listSymbolsOportunidades, browser );

  },

  'Demo test TorOso Inversor BOT 4' : function (browser) {

  //inicio del ciclo

/*
    if (listSymbolsOportunidades!=null){

       for (var i = 0; i < listSymbolsOportunidades[0].length; i++) {
                        console.log(listSymbolsOportunidades[0][i].tipoOperacion + ' SYMBOL OPORTUNIDAD = ' + listSymbolsOportunidades[0][i].symbol);


                        if (listSymbolsOportunidades[0][i].tipoOperacion=="TORO"){
                            console.log("Entro a TORO (COMPRAR)");                       
                       
                          browser                
                            .pause(1000)

                            .useXpath().click("//*[contains(text(), '" + listSymbolsOportunidades[0][i].nameDescripcionEnglish + "')]")
                                
                            .pause(5000);

                            console.log("Iniciar LOG - while");

                            browser
                            .pause(5000);  


                        }
                        else
                        if (listSymbolsOportunidades[0][i].tipoOperacion=="OSO"){
                            console.log("Entro a OSO (VENDER)");   
                        }

                };

    } else{

           browser
              .pause(15000);  

    }

    browser
        .pause(5000);             


*/



       //   } //WHILE


  },//Demo test
  







  
};
