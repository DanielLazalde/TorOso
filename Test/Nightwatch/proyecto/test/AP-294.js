//Script Flujo Completo Escenario: Tipo Cliente Cl�sico, Seguro Normal, Sin TAE, Tipo Pago STP

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://54.71.172.143:3000/#/?_k=5gjkho')
      .waitForElementVisible('body', 1000)

      .waitForElementVisible('input[type=text]', 1000)
      .setValue('input[type=text]', 'Nor')

      .waitForElementVisible('input[id=password]',1000)
      .setValue('input[id=password]','12345')

      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .pause(5000)
      .useXpath()

     
      .waitForElementPresent("//form[@id='seleccionSucursalForm']/div/div/select",1000)
      .click("//form[@id='seleccionSucursalForm']/div/div/select")  
      .setValue("//form[@id='seleccionSucursalForm']/div/div/select",'TEPIC')
      .click("//form[@id='seleccionSucursalForm']/div/div/select")
      
      
      .useCss()//TRUENA SI NO SE PONE
      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .useXpath()
      
      .waitForElementPresent("//div[@id='contenido']/div/div[3]/div/div/div/p/b",1000)//NO PASA NADA SI SE QUITA
      .click("//div[@id='contenido']/div/div[3]/div/div/div/p/b")
      .useCss()
      
      .waitForElementVisible('select[id=tipodevale]',1000)//NO PASA NADA SI SE QUITA
      .pause(5000)
      .setValue('select[id=tipodevale]','001-VALEDINERO')
      
      .pause(1000)
      .waitForElementPresent('div.Select.distribuidora-form .Select-control .Select-input',1000)
      .pause(1000)
      //.click('div.Select.distribuidora-form.Select .Select-control')
      .click('div.Select.distribuidora-form.Select .Select-control')
      .setValue('div.Select.distribuidora-form.Select .Select-control .Select-input input', '5')
      .pause(10000)
      .sendKeys('div.Select.distribuidora-form.Select .Select-control .Select-input input', browser.Keys.ENTER)

      .waitForElementPresent('div.modal-footer',1000)
      .waitForElementPresent('button.btn.btn-success',1000)
      .click('div.modal-footer > button.btn.btn-primary')




      .waitForElementVisible('input[id=celularSearch]',1000)
      .pause(5000)
      .click('input[id=celularSearch]')
      .click('input[id=celularSearch]')

      .setValue('input[id=celularSearch]','6677981334')
      .sendKeys('input[id=celularSearch]', browser.Keys.ENTER)
      .pause(5000)

      .waitForElementVisible('img[id="llamadaCliente"]',1000)
      .click('img[id="llamadaCliente"]')
      .pause(5000)

      .waitForElementVisible('button[id="btnContinuar"]',1000)
      .click('button[id="btnContinuar"]')

      

      .setValue('input[id=nombreClienteValidacion','hassil piña medina')
      .pause(1000)


       .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
       .click('button.btn.btn-success.btn-lg')
       .pause(2000) 

       .waitForElementVisible('input[id=folio]',1000)
       .setValue('input[type=text]', '5250153')
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

		
		.waitForElementVisible('button.btn.btn-danger',1000)
		.click('button.btn.btn-danger')
		.pause(3000)

		
		.waitForElementVisible('button.btn.btn-danger',1000)
		.click('button.btn.btn-danger')
		.pause(2000)
		.click('button.btn.btn-danger')
		.pause(4000)


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



		.waitForElementVisible('input[id="stpBancomer"]',1000)
		.click('input[id="stpBancomer"]')
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