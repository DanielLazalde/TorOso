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



module.exports = {


  'Demo test TorOso Inversor BOT' : function (browser) {
  
  var var_symbol = "EUR/USD";
  var conexionTorOso = require('./conexion_mysql/app.js');

//Buscar areas de oportunidad de la base de datos

//Iterar todas las areas de oportunidad


//conexionTorOso.abrirConexion();

conexionTorOso.query();

//conexionTorOso.cerrarConexion();

    browser
      .url('https://app.plus500.com/')
      .waitForElementVisible('body', 1000)
     //Campos usuario y contraseña vacios    

//SELECCIONA EL IDIOMA
      //.pause(1000)


      //.waitForElementPresent('#languageSelection',1000)
      //.click('#languageSelection')  
      //.setValue('#languageSelection','Español')
      //.click('#languageSelection')


//****************************************************************   
      //.pause(1000)

      //.waitForElementVisible('#realMoney',2000)
      .waitForElementVisible('#demoMode',2000)

      
      .click('#demoMode')


      .waitForElementVisible('#newUserCancel',2000)
      .click('#newUserCancel')
      .pause(1000)

      .waitForElementVisible('input[type=text]', 1000)
      .setValue('input[type=text]', 'inversionlazalde02@gmail.com')
      
      
      .setValue('input[type=password]', 'Daniel9238')
      
      .click('#submitLogin')
      

      .pause(5000)

     // .waitForElementPresent("//div[@class='instrument green-change win-disposable']/div/div[3]/div/div/div/p/b",1000)

      /*
.getText("div:nth-of-type(2) > .instrument green-change win-disposable", function(result) {
    this.assert.equal(typeof result, "object");
    this.assert.equal(result.status, 0);
    this.assert.equal(result.value, "");
  })*/



  //.doubleClick('(//div[@class="instrument green-change win-disposabl"][1]')


      //.doubleClick('.instrument green-change win-disposable selected:nth-of-type(0)')
      
            .pause(1000)

              

      //.waitForElementPresent("//div[@class='instrument green-change win-disposable']",5000)

          // .assert.containsText('@data-instrument-id', '289')

  //.assert.containsText("#instrument green-change win-disposable", "289")

      //.waitForElementPresent('div[data-instrument-id=289]', 5000)

      //.waitForElementPresent("//div[contains(@class, 'instrument green-change win-disposable selected') and text()='Spain 35']")

//.click("//div[contains(@class, 'instrument green-change win-disposable selected')][div/text()[contains(.,'Spain 35')]]")
//waitForElementPresentdiv[contains(@class, "class")][h4/text()[contains(.,"Condition")]]

//Click Mis Favoritos
.pause(5000)

.waitForElementVisible('#mainCategoriesRepeater  li:nth-child(1) ul li:last-child a', 1000)
.click('#mainCategoriesRepeater  li:nth-child(1) ul li:last-child a')

.pause(1000)

.useXpath().click("//*[contains(text(), '" + var_symbol + "')]")

//.waitForElementVisible('#mainCategoriesRepeater li:child-nth(1) ul:child-nth(1) li:child-nth(3) a', 1000)
//.click("#mainCategoriesRepeater li:nth(3) a[text='My Favorites']")
//.waitForElementVisible('#mainCategoriesRepeater li:nth(3) a', 1000)
              //.assert.elementPresent("ul.footer li:nth(0) a")

            
            //.click('//div[contains(@class,"categories")]/div/ul/li[1]/ul/li[3]/a')

            //.click('//div[contains(@class,"categories")]/div/ul/li[1]/ul/li[3]/a')

// ul#ddEmp li:nth-child(3)


           // .click('//li a[text()="My Favorites"]')


      
       .pause(5000)




//**********************************************************************************************
//**********************************************************************************************
//************************ VENDER EN CORTO *****************************************************
//**********************************************************************************************
//**********************************************************************************************

.useXpath()
//.waitForElementVisible('//div[contains(@class,"instrument green-change win-disposable")][2]', 1000)
.waitForElementVisible("//*[contains(text(), '"+ var_symbol + "')]", 1000)

//.click('//div[contains(@class,"instrument green-change win-disposable selected")]')
//.click('//div[contains(@class,"instrument green-change win-disposable")][2]')
.click("//*[contains(text(), '"+ var_symbol + "')]")
.pause(5000)

//.click('//div[contains(@class,"instrument green-change win-disposable")][2]/div/button[@class="buySellButton"]')
//.click('//*/div/button[@class="buySellButton"]')
.waitForElementVisible('//*[contains(@class, "selected")]', 1000)
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
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
      
      /*.pause(1000)
      
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
      */


      

      .pause(5000)
      
      .click('#close-at-profit-checkbox')


      .waitForElementVisible('//div[contains(@class,"sidebar-action")]/div/button[@class="sell"]', 1000)

      .click('//div[contains(@class,"sidebar-action")]/div/button[@class="sell"]')
       .pause(1000)


//**********************************************************************************************
//**********************************************************************************************
//************************ COMPRAR *****************************************************
//**********************************************************************************************
//**********************************************************************************************


//.waitForElementVisible('//div[contains(@class,"instrument green-change win-disposable selected")]', 1000)
////.click('//div[contains(@class,"instrument green-change win-disposable selected")]')
//.click('//div[contains(@class,"instrument green-change win-disposable selected")]')

//.click('//div[contains(@class,"instrument green-change win-disposable selected")]/div[@class="buy-button"]/button[@class="buySellButton"]')

.useXpath()
.waitForElementVisible("//*[contains(text(), '"+ var_symbol + "')]", 1000)

.click("//*[contains(text(), '"+ var_symbol + "')]")
.pause(5000)

.waitForElementVisible('//*[contains(@class, "selected")]', 1000)
.click("//*[contains(@class, 'selected')]/div[@class='buy-button']/button[@class='buySellButton']")


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
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
      
      /*
      .pause(1000)
      
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
      */
      
      .pause(5000)
            
      .click('#close-at-profit-checkbox')

      .waitForElementVisible('//div[contains(@class,"sidebar-action")]/div/button[@class="buy"]', 1000)

      .click('//div[contains(@class,"sidebar-action")]/div/button[@class="buy"]')
       .pause(1000)


//**********************************************************************************************
//**********************************************************************************************
      

  },
 
  'Selección symbol activo' : function (browser) {

    var_symbol = 'Spain 35';
    var contador = 1;

     while (contador < 4) {
      console.log("Entro while");
      contador = contador + 1;
    
      if (contador == 1){
        console.log("ES UNOOOOOO");
      }


//agregar a la tabla symbol las descripciones en ingles de plus500 descInglish

//falta seleccionar los checks de stop de perdidas y ganancias

//agregar a la cuenta de favoritos todas los instrumentos financieros que estan contempladas en torOsoInversor

//INICIO PAGINA

  //iniciar ciclo

    //BD - call procedimiento

    //HAY  OPORTUNIDAD

      //TORO

      //OSO



      browser
             //Click Mis Favoritos
        .useXpath()
        .waitForElementVisible("//*[contains(text(), '"+ var_symbol +"')]", 1000)

        .click("//*[contains(text(), '"+ var_symbol +"')]")
        .pause(5000)

        //.waitForElementVisible('//*[contains(@class, "selected")]', 1000)
        //.click("//*[contains(@class, 'selected')]/div[@class='buy-button']/button[@class='buySellButton']")


        //.pause(1000)


      }

  },


  
};
