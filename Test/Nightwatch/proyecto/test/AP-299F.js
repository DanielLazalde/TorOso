//Script Flujo Completo Escenario: Tipo Cliente Cl�sico, Seguro Club 100, Con TAE, Tipo Pago Cheque




module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://35.164.233.122:3000/#/?_k=6ihrhh')
      .waitForElementVisible('body', 1000)
     //Campos usuario y contraseña vacios
      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .pause(5000)

      .waitForElementVisible('input[type=text]', 1000)
      .setValue('input[type=text]', 'samm')
      .pause(1000)
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
