//Script Flujo Completo Escenario: Tipo Cliente Cl�sico, Seguro Normal, Sin TAE, Tipo Pago STP

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://54.71.172.143:3000/#/?_k=5gjkho')
      .waitForElementVisible('body', 1000)
     //Campos usuario y contraseña vacios
      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .pause(5000)

      .waitForElementVisible('input[type=text]', 1000)
      .setValue('input[type=text]', 'Nor')
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
      .setValue('input[id=password]','12345')
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

      
      
      .waitForElementVisible('select[id=tipodevale]',1000)
      .pause(5000)
      .setValue('select[id=tipodevale]','001-VALEDINERO')

      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')
      
      .pause(1000)
      .waitForElementPresent('div.Select.distribuidora-form .Select-control .Select-input',1000)
      .pause(1000)
      
      .click('div.Select.distribuidora-form.Select .Select-control')
      .setValue('div.Select.distribuidora-form.Select .Select-control .Select-input input', '5')
      .pause(10000)
      .sendKeys('div.Select.distribuidora-form.Select .Select-control .Select-input input', browser.Keys.ENTER)

      .waitForElementPresent('div.modal-footer',1000)
      .waitForElementPresent('button.btn.btn-success',1000)
      .click('div.modal-footer > button.btn.btn-primary')
      //no se llena nigun campo del cliente
      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')
      .pause(5000)
     


      .waitForElementVisible('button.toast-close-button',1000)
       .click('button.toast-close-button')
       .pause(2000) 


   
      .waitForElementVisible('input[id=celularSearch]',1000)
      .pause(5000)
      .click('input[id=celularSearch]')
      .click('input[id=celularSearch]')



      .waitForElementVisible('input[id=celularSearch]',1000)
      .pause(5000)
      .click('input[id=celularSearch]')
      .click('input[id=celularSearch]')

      .setValue('input[id=celularSearch]','6677981334')
      .sendKeys('input[id=celularSearch]', browser.Keys.ENTER)
      .pause(5000)
     //No se realiza la llamada  
      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')
      .pause(5000)

      
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
       //se captura el nombre correcto
      .clearValue('input[id=nombreClienteValidacion]')
      .setValue('input[id=nombreClienteValidacion','hassil piña medina')
      .pause(1000)

      
       .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
       .click('button.btn.btn-success.btn-lg')
       .pause(2000) 
      //folio que no le pertenesca a la distribuidora o ya este canjeado
       .waitForElementVisible('input[id=folio]',1000)
       .setValue('input[type=text]', '5250153')
       .pause(6000)

       .waitForElementVisible('select[id=importe]',1000)
      .click('select[id=importe]')
      .pause(1000)

       .clearValue('input[id=folio]')
       .setValue('input[type=text]', '5250170')
       .pause(1000)





      .waitForElementVisible('select[id=importe]',1000)
      .click('select[id=importe]')
      .pause(1000)
      .setValue('select[id=importe]','1000')
      .click('select[id=importe]')
      .sendKeys('select[id=importe]', browser.Keys.ENTER).pause(1000)
      .pause(2000)  

      
      .waitForElementVisible('select[id=plazo]',2000)
      .click('select[id=plazo]')
      .pause(1000)
      .setValue('select[id=plazo]','10')
      .click('select[id=plazo]')
      .sendKeys('select[id=plazo]', browser.Keys.ENTER).pause(1000)
      .pause(2000)




     .waitForElementVisible('button[id="10"]',1000)
     .click('button[id="10"]')
     .pause(5000)

       .waitForElementVisible('input[id=preguntaQuincenasMensualidades]',1000)
       .click('input[id=preguntaQuincenasMensualidades]')
       .setValue('input[id=preguntaQuincenasMensualidades]', 'de 10 quincenas a 145')
       .pause(5000)

     


		.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
		.click('button.btn.btn-success.btn-lg')
		.pause(2000)

		.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
		.click('button.btn.btn-success.btn-lg')
		.pause(2000)

		.setValue('input[id=pinUsuario]','654321')
		.pause(2000)

		.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
		.click('button.btn.btn-primary')
		.pause(3000)
		.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
		.click('button.btn.btn-success.btn-lg')

		.pause(3000)



		.waitForElementVisible('input[id="5"]',1000)
		.click('input[id="5"]')
		.pause(1000)

		.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
		.click('button.btn.btn-success.btn-lg')
		.pause(2000)



		 .waitForElementVisible('input[id=tarjeta]',1000)
		 .click('input[id=tarjeta]')
		 .setValue('input[id=tarjeta]', '4152313274390371')


		 .waitForElementVisible('input[id=confirmacionTarjeta]',1000)
		 .click('input[id=confirmacionTarjeta]')
		 .setValue('input[id=confirmacionTarjeta]', '4152313274390371')



		.waitForElementVisible('select[id=banco]',1000)
		.pause(1000)
		.setValue('select[id=banco]','BANCOMEXT')
		.pause(3000) 

		.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
		.click('button.btn.btn-success.btn-lg')
		.pause(2000)





		.waitForElementPresent('div.modal-footer',1000)
		.waitForElementPresent('button.btn.btn-danger',1000)
		.click('div.modal-footer > button.btn.btn-danger')
		.pause(1000)

		.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
		.click('button.btn.btn-success.btn-lg')
		.pause(2000)


		.waitForElementPresent('div.modal-footer',1000)
		.waitForElementPresent('button.btn.btn-success',1000)
		.click('div.modal-footer > button.btn.btn-success')



             }
};