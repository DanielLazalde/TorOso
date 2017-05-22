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

//Buscar areas de oportunidad de la base de datos

//Iterar todas las areas de oportunidad




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
      .setValue('input[type=text]', 'inversionlazalde01@gmail.com')
      
      
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

.useXpath().click("//*[contains(text(), 'EUR/USD')]")

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
.waitForElementVisible("//*[contains(text(), 'EUR/USD')]", 1000)

//.click('//div[contains(@class,"instrument green-change win-disposable selected")]')
//.click('//div[contains(@class,"instrument green-change win-disposable")][2]')
.click("//*[contains(text(), 'EUR/USD')]")
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
     
     .setValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', '50')
      
     
      .pause(5000)

      .setValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', '')
      
      .pause(1000)
      //Resta
      //.waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-minus ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      //.click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-minus ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only"]')

      //Suma
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
      
      /*.pause(1000)
      
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
      */


      

      .pause(5000)
            

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
.waitForElementVisible("//*[contains(text(), 'EUR/USD')]", 1000)

.click("//*[contains(text(), 'EUR/USD')]")
.pause(5000)

.waitForElementVisible('//*[contains(@class, "selected")]', 1000)
.click("//*[contains(@class, 'selected')]/div[@class='buy-button']/button[@class='buySellButton']")


.pause(1000)

      //setear el texto cantidad

      //<input type="text" id="amount-input" data-win-bind="disabled: AmountSpinnerEnabled Converters.not" aria-valuemin="50" aria-valuemax="25000" class="ui-spinner-input" autocomplete="off" role="spinbutton" aria-valuenow="16700">
       
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', 1000)

      .clearValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]')
     
     .setValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', '50')
      
     
      .pause(5000)
     
     .setValue('//div[contains(@class,"sidebar-trade")]/div/div/div/input[@class="ui-spinner-input"]', '')
      
      .pause(1000)
      //Resta
      //.waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-minus ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      //.click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-minus ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only"]')
      
      //Suma
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
      
      /*
      .pause(1000)
      
      .waitForElementVisible('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]', 1000)
      .click('//div[contains(@class,"sidebar-trade")]/div/div/div/button[@class="icon-plus ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only"]')
      */
      
      .pause(5000)
            

      .waitForElementVisible('//div[contains(@class,"sidebar-action")]/div/button[@class="buy"]', 1000)

      .click('//div[contains(@class,"sidebar-action")]/div/button[@class="buy"]')
       .pause(1000)


//**********************************************************************************************
//**********************************************************************************************

     //Campo contraseña vacia
      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .pause(5000)
     //contraseña incorrecta
      .waitForElementVisible('input[id=password]',1000)
      .setValue('input[id=password]','1')
      .pause(1000)
      
      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .pause(5000)

     //contraseña correcta
      .waitForElementVisible('input[id=password]',1000)
    
      .clearValue('input[id=password]')
      .setValue('input[id=password]','s')
      .pause(2000)

     
      .click('button.btn.btn-success')
      .pause(5000)
      .useXpath()

      //No se selecciona sucursal
      .useCss()
      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .pause(2000)
      .useXpath()
     //se selecciona sucursal
      .waitForElementPresent("//form[@id='seleccionSucursalForm']/div/div/select",1000)
      .click("//form[@id='seleccionSucursalForm']/div/div/select")  
      .setValue("//form[@id='seleccionSucursalForm']/div/div/select",'TEPIC')
      .click("//form[@id='seleccionSucursalForm']/div/div/select")
      
      
      .useCss()
      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .useXpath()
      


      .waitForElementPresent("//div[@id='contenido']/div/div[3]/div/div/div/p/b",1000)
      .click("//div[@id='contenido']/div/div[3]/div/div/div/p/b")
      .useCss()
      .pause(3000)
      //No se selecciona Tipo de vale ni distribuidora  
       
      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')

      
      //Se selecciona tipo de vale
      .waitForElementVisible('select[id=tipodevale]',1000)
      .pause(5000)
      .setValue('select[id=tipodevale]','001-VALEDINERO')
      //No se selecciona  distribudora
      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')
      //Se selecciona distribuidora
      .pause(1000)
      .waitForElementPresent('div.Select.distribuidora-form .Select-control .Select-input',1000)
      .pause(1000)
      
      .click('div.Select.distribuidora-form.Select .Select-control')
      .setValue('div.Select.distribuidora-form.Select .Select-control .Select-input input', '7')
      .pause(10000)
      .sendKeys('div.Select.distribuidora-form.Select .Select-control .Select-input input', browser.Keys.ENTER)
      //Se verifica firma
      .waitForElementPresent('div.modal-footer',1000)
      .waitForElementPresent('button.btn.btn-success',1000)
      .click('div.modal-footer > button.btn.btn-primary')
      //No se llena nigun campo del cliente
      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')
      .pause(5000)
     

       //Cierra el mensaje de error que faltan los datos del cliente
      .waitForElementVisible('button.toast-close-button',1000)
      .click('button.toast-close-button')
      .pause(2000) 


      //Busqueda por Celular
      .waitForElementVisible('input[id=celularSearch]',1000)
      .pause(5000)
      .click('input[id=celularSearch]')
      .click('input[id=celularSearch]')

      .waitForElementVisible('input[id=celularSearch]',1000)
      .pause(5000)
      .click('input[id=celularSearch]')
      .click('input[id=celularSearch]')

      .setValue('input[id=celularSearch]','6677898989')
      .sendKeys('input[id=celularSearch]', browser.Keys.ENTER)
      .pause(5000)
     //No se realiza la llamada  
      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')
      .pause(5000)
      //Se cierra mensaje de falta hacer la llamada
      
      .waitForElementVisible('button.toast-close-button',1000)
      .click('button.toast-close-button')
      .pause(2000)
       
     //Se realiza la llamada
      .waitForElementVisible('img[id="llamadaCliente"]',1000)
      .click('img[id="llamadaCliente"]')
      .click('img[id="llamadaCliente"]')
      .pause(6000)
      
      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')

     //se captura el nombre incorrecto  
    
      .setValue('input[id=nombreClienteValidacion','hasoil piña medina')
      .pause(1000)
      
      .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
      .click('button.btn.btn-success.btn-lg')
      .pause(2000) 
      //Se captura el nombre correcto
      .clearValue('input[id=nombreClienteValidacion]')
      .setValue('input[id=nombreClienteValidacion','rosio piña medina')
      .pause(1000)

      //Pasa a la siguiente pantalla
       .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
       .click('button.btn.btn-success.btn-lg')
       .pause(2000) 
      //Se captura un folio que no le pertenesca a la distribuidora o ya este canjeado
       .waitForElementVisible('input[id=folio]',1000)
       .setValue('input[type=text]', '5253')
       .pause(6000)

       .waitForElementVisible('select[id=importe]',1000)
       .click('select[id=importe]')
       .pause(1000)
       //Se captura el folio correcto
       .clearValue('input[id=folio]')
       .setValue('input[type=text]', '263925')
       .pause(1000)
       //Se captura el importe

       .waitForElementVisible('select[id=importe]',1000)
       .click('select[id=importe]')
       .pause(1000)
       .setValue('select[id=importe]','1000')
       .click('select[id=importe]')
       .sendKeys('select[id=importe]', browser.Keys.ENTER).pause(1000)
       .pause(2000)  
       //Se captura el plazo
      
	   .waitForElementVisible('select[id=plazo]',2000)
	   .click('select[id=plazo]')
	   .pause(1000)
	   .setValue('select[id=plazo]','10')
	   .click('select[id=plazo]')
	   .sendKeys('select[id=plazo]', browser.Keys.ENTER).pause(1000)
	   .pause(2000)

       //Se acepta la donacion
       .waitForElementVisible('button[id="10"]',1000)
       .click('button[id="10"]')
       .pause(5000)
       //Se captura las mensualidades 
       .waitForElementVisible('input[id=preguntaQuincenasMensualidades]',1000)
       .click('input[id=preguntaQuincenasMensualidades]')
       .setValue('input[id=preguntaQuincenasMensualidades]', 'de 10 quincenas a 145')
       .pause(5000)

      //Pasa a la siguiente pantalla

	   .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
	   .click('button.btn.btn-success.btn-lg')
	   .pause(2000)

  
      //Se selecciona el Modulo 100
       .waitForElementPresent('select.form-control[name="pkModuloSeguro"]',1000)
       .click('select.form-control[name="pkModuloSeguro"]')
       .click('select.form-control[name="pkModuloSeguro"]')
       .setValue('select.form-control[name="pkModuloSeguro"]', 'CLUB100')
       .pause(1000)
     //Click en el botón Aplicar.
       .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
       .click('button.btn.btn-success.btn-lg')
       .click('button.btn.btn-success.btn-lg')
       .pause(2000)
     //Se ingresa el PIN
       .setValue('input[id=pinUsuario]','654321')
       .pause(2000)
     //Se cierra modal
       .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
       .click('button.btn.btn-primary')
       .pause(3000)
    //Pasa a la siguiente pantalla
       .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
       .click('button.btn.btn-success.btn-lg')
       .pause(3000)

       //pantalla 5
     //Se selecciona cheque

	   .waitForElementVisible('input[id="1"]',1000)
	   .click('input[id="1"]')
	   .pause(1000)
      //Continua
	   .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
       .click('button.btn.btn-success.btn-lg')
       .pause(2000)

       .waitForElementVisible('button[id="obtener"]',1000)
       .click('button[id="obtener"]')
       .pause(1000)

       .acceptAlert()
       .pause(1000)

       .waitForElementVisible('button[id="btnChequelanzar"]',1000)
       .click('button[id="btnChequelanzar"]')
       .pause(1000)
      
       .waitForElementVisible('button[id="PASAR"]',1000)
       .click('button[id="PASAR"]')
       .pause(1000)


       .acceptAlert()
       .pause(1000)

       //pantalla 6
       //Se selecciona si quiere tae
       .waitForElementVisible('select[id=deseaTae]',2000)
       .click('select[id=deseaTae]')
       .pause(1000)
       .setValue('select[id=deseaTae]','SI')
       .click('select[id=deseaTae]')
       .sendKeys('select[id=deseaTae]', browser.Keys.ENTER).pause(1000)
       .pause(2000)
      
       //Se selecciona compañia
       .waitForElementVisible('select[id=idEmpresa]',2000)
       .click('select[id=idEmpresa]')
       .pause(1000)
       .setValue('select[id=idEmpresa]','TELCEL')
       .click('select[id=idEmpresa]')
       .sendKeys('select[id=idEmpresa]', browser.Keys.ENTER).pause(1000)
       .pause(2000)

        //Se selecciona el periodo de recarga
       .waitForElementVisible('select[id=periodoRecarga]',2000)
       .click('select[id=periodoRecarga]')
       .pause(1000)
       .setValue('select[id=periodoRecarga]','UNICA OCASIÓN')
       .click('select[id=periodoRecarga]')
       .sendKeys('select[id=periodoRecarga]', browser.Keys.ENTER).pause(1000)
       .pause(2000)
      
      //Se selecciona el importe
       .waitForElementVisible('select[id=importe]',2000)
       .click('select[id=importe]')
       .pause(1000)
       .setValue('select[id=importe]','200')
       .click('select[id=importe]')
       .sendKeys('select[id=importe]', browser.Keys.ENTER).pause(1000)
       .pause(2000)

       //Se selecciona si es para cliente u otra persona
       .waitForElementVisible('button[id="esParaCliente"]',1000)
       .click('button[id="esParaCliente"]')
       .pause(1000)

      //Se da clic al boton  para guardar tae 
       .waitForElementVisible('button[id="btn-guardarTae"]',1000)
       .click('button[id="btn-guardarTae"]')
       .pause(1000)
      
       //Se impimen documentos
       .waitForElementVisible('button[id="btn-imprimirDocumentos"]',1000)
       .click('button[id="btn-imprimirDocumentos"]')
       .pause(1000)
       //Se sale de la pantalla 6 y te devuelve a la pantalla de inicio
       .waitForElementVisible('button[id="btn-salir"]',1000)
       .click('button[id="btn-salir"]')
       .pause(1000)

      

             }
};
