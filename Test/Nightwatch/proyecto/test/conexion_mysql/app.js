


var oportunidad ;

var oportunidadList = {
    symbol : 'Pepe',
    tipoOperacion: 25
};

function abrirConexion(){

var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'todoesposible',
   database: 'toroso',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});



}



function query(){

var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'todoesposible',
   database: 'toroso',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

var resultQuery;

var r = connection.query('CALL getOportunity("ASDA")',function(err,rows){
  if (err) throw err;

  console.log('Data received 2 from Db:\n' + rows);
  //console.log(rows);

      for (var i = 0; i < rows[0].length; i++) {
        console.log(rows[0][i].tipoOperacion + ' SYMBOL = ' + rows[0][i].symbol);
      };

      resultQuery = 13123;

      return resultQuery;
});

//console.log("RESULTADO QUERY " + rows);

//var query = connection.query('SELECT tipoOperacion FROM symbolHystoryTorOso WHERE symbol = ?', ['JPY=X'], function(error, result){
//var query = connection.query('SELECT tipoOperacion FROM symbolHystoryTorOso WHERE created_at > "2017-05-08" AND symbol = ?', ['JPY=X'], function(error, result){
   /*var query = connection.query('CALL getOportunity(?);', ['JPY=X'], function(error, result){

//var query = connection.query('select tipoOperacion, (priceClose-price)* cantidadContratos * 200,a.totalGananciaPerdida,  a.* from symbolHystoryTorOso a  where created_at >= current_date() AND symbol = ? AND created_at > DATE_SUB(NOW(),INTERVAL 2 MINUTE)', ['JPY=X'], function(error, result){


      if(error){
         throw error;
      }else{
         var resultado = result;
         if(resultado.length > 0){
            console.log(resultado[0].tipoOperacion + ' ' + resultado[0].tipoOperacion + ' / ' + resultado[0].tipoOperacion);
         }else{
            console.log('Registro no encontrado');
         }

         //oportunidad = result;
      }
   }
);*/

   connection.end();

   //console.log("RESULTADo = " +JSON.parse(resultQuery[0]));

   //oportunidad = resultQuery;
   return oportunidad;

}



function cerrarConexion(){
   connection.end();
}



function oportuni(){
   return oportunidad;
}

//module.exports.abrirConexion = abrirConexion;
module.exports.query = query;
module.exports.oportunidad = oportunidad;
module.exports.oportuni = oportuni;

//module.exports.cerrarConexion = cerrarConexion;


module.exports.demo = function(queryString,  callback) {
    try {
     var mysql = require('mysql');
    var connection = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'todoesposible',
       database: 'toroso',
       port: 3306
    });
    connection.connect(function(error){
       if(error){
          throw error;
       }else{
          console.log('Conexion correcta.');
       }
    });

        console.log('Step 1');

       var r = connection.query('CALL getOportunity("ASDA")', function(err, rows, fields) {
            console.log('Step 2');
            if (err) {
                console.log("ERROR : " + err);
            }

            //console.log('The solution is: ', rows[0].solution);

            for (var i = 0; i < rows[0].length; i++) {
              console.log(rows[0][i].tipoOperacion + ' SYMBOL*********** = ' + rows[0][i].symbol);
            };

            callback(rows);

            return 23423424232;
        });
        //callback();

        connection.end();
        console.log('Step 3');
    }
    catch(ex) {
        console.log("EXCEPTION : " + ex);
    }
};


module.exports.cazar = function(listSymbolsOportunidades, browser){

var contador = 2;
       var listadoOportunidades;
       var toroso;
       listSymbolsOportunidades = null;
           
           app.set('port', 5000);

     
            //CONSULTA A BD

            var data = 123;
            var r = demo(query, function(result) { 
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

                    listSymbolsOportunidades(rows);



            };


          }
          );

     
}

module.exports.favoritosselected = function(listSymbolsOportunidades, browser){

console.log("LISTADO OPORTUNIDADES " + listSymbolsOportunidades);
  if (listSymbolsOportunidades!=null){

       for (var i = 0; i < listSymbolsOportunidades[0].length; i++) {
                        console.log(listSymbolsOportunidades[0][i].tipoOperacion + ' SYMBOL OPORTUNIDAD = ' + listSymbolsOportunidades[0][i].symbol);


                        if (listSymbolsOportunidades[0][i].tipoOperacion=="TORO"){
                            console.log("Entro a TORO (COMPRAR)");                       
                       
                         /* browser                
                            .pause(1000)

                            .useXpath().click("//*[contains(text(), '" + listSymbolsOportunidades[0][i].nameDescripcionEnglish + "')]")
                                
                            .pause(5000);

                            console.log("Iniciar LOG - while");

                            browser
                            .pause(5000);  */



                              //**********************************************************************************************
                              //**********************************************************************************************
                              //************************ COMPRAR *****************************************************
                              //**********************************************************************************************
                              //**********************************************************************************************


                              //.waitForElementVisible('//div[contains(@class,"instrument green-change win-disposable selected")]', 1000)
                              ////.click('//div[contains(@class,"instrument green-change win-disposable selected")]')
                              //.click('//div[contains(@class,"instrument green-change win-disposable selected")]')

                              //.click('//div[contains(@class,"instrument green-change win-disposable selected")]/div[@class="buy-button"]/button[@class="buySellButton"]')
                              browser
                              .useXpath()
                              .waitForElementVisible("//*[contains(text(), '"+ listSymbolsOportunidades[0][i].nameDescripcionEnglish  + "')]", 1000)

                              .click("//*[contains(text(), '"+ listSymbolsOportunidades[0][i].nameDescripcionEnglish  + "')]")
                              .pause(5000)

                              .waitForElementVisible('//*[contains(@class, "selected")]', 1000)
                              .click("//*[contains(@class, 'selected')]/div[@class='buy-button']/button[@class='buySellButton']")
                              .click("//*[contains(@class, 'selected')]/div[@class='buy-button']/button[@class='buySellButton']")

                              .pause(1000)

                                    //setear el texto cantidad
                                     
                                   .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', 1000)

                                   .clearValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]')
                                   
                                   .setValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', '1')
                                    
                                   
                                   .pause(5000)
                                   
                                   .setValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', '')
                                    
                                   .pause(1000)
                                    //Resta
                                   .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-minus ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
                                   .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-minus ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only"]')
                                    
                                    //Suma
                                   //.waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
                                   //.click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
                                    
                                    /*
                                    .pause(1000)
                                    
                                    .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
                                    .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
                                    */
                                    
                                    .pause(5000)
                                          

                                    //.click('//div[contains(@class, "sidebar-trade")]/div/div/div/div[@class="checkbox"]/input[@id="close-at-profit-checkbox"]')
                                    .click("//*[contains(text(), 'Close at profit')]")
                                    .pause(5000)

                                    .click('//div[contains(@class, "sidebar-trade")]/div/div/div/div[@class="checkbox"]/input[@id="close-at-loss-checkbox"]')

                                    .pause(5000)

                                    .waitForElementVisible('//div[contains(@class,"sidebar-action")]/div/button[@class="buy"]', 1000)

                                    .click('//div[contains(@class,"sidebar-action")]/div/button[@class="buy"]')
                                    .pause(1000);


                              //**********************************************************************************************
                              //**********************************************************************************************


                        }
                        else
                        if (listSymbolsOportunidades[0][i].tipoOperacion=="OSO"){
                            console.log("Entro a OSO (VENDER)");   

                                //**********************************************************************************************
                                //**********************************************************************************************
                                //************************ VENDER EN CORTO *****************************************************
                                //**********************************************************************************************
                                //**********************************************************************************************

                                browser
                                .useXpath()
                                //.waitForElementVisible('//div[contains(@class,"instrument green-change win-disposable")][2]', 1000)
                                .waitForElementVisible("//*[contains(text(), '"+ listSymbolsOportunidades[0][i].nameDescripcionEnglish + "')]", 1000)

                                //.click('//div[contains(@class,"instrument green-change win-disposable selected")]')
                                //.click('//div[contains(@class,"instrument green-change win-disposable")][2]')
                                .click("//*[contains(text(), '"+ listSymbolsOportunidades[0][i].nameDescripcionEnglish + "')]")
                                .pause(5000)

                                //.click('//div[contains(@class,"instrument green-change win-disposable")][2]/div/button[@class="buySellButton"]')
                                //.click('//*/div/button[@class="buySellButton"]')
                                .waitForElementVisible('//*[contains(@class, "selected")]', 1000)
                                .click("//*[contains(@class, 'selected')]/div/button[@class='buySellButton']")
                                .click("//*[contains(@class, 'selected')]/div/button[@class='buySellButton']")

                                      .pause(1000)

                                       //setear el texto cantidad

                                      //<input type="text" id="amount-input" data-win-bind="disabled: AmountSpinnerEnabled Converters.not" aria-valuemin="50" aria-valuemax="25000" class="ui-spinner-input" autocomplete="off" role="spinbutton" aria-valuenow="16700">
                                       
                                      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', 1000)

                                      .clearValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]')
                                     
                                     .setValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', '1')
                                      
                                     
                                      .pause(5000)

                                      .setValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', '')
                                      
                                      .pause(1000)
                                      //Resta
                                      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-minus ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
                                      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-minus ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only"]')

                                      //Suma
                                      //.waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
                                      //.click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
                                      
                                      /*.pause(1000)
                                      
                                      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
                                      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
                                      */

                                      .pause(5000)
                                      
                 
                                     //.click('//div[contains(@class, "close-at-profit")]/div/div/input[id="close-at-profit-checkbox"]')
                                     .click("//*[contains(text(), 'Close at profit')]")
                                    
                                     .pause(5000)

                                     .click('//div[contains(@class, "sidebar-trade")]/div/div/div/div[@class="checkbox"]/input[@id="close-at-loss-checkbox"]')

                                    .pause(5000)
                                    


                                      .waitForElementVisible('//div[contains(@class,"sidebar-action")]/div/button[@class="sell"]', 1000)

                                      .click('//div[contains(@class,"sidebar-action")]/div/button[@class="sell"]')
                                       .pause(1000);



                        }

                };

    }else{

           browser
              .pause(5000)

              .useXpath().click("//*[contains(text(), 'Oil')]")
      
              // 2 MINUTOS
              .pause(5000);

    }
    browser
        .pause(5000);       


}





