//Script Flujo Completo Escenario: Tipo Cliente Nuevo, Seguro Club 150, Sin TAE, Tipo Pago Cheque
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



      .waitForElementVisible('input[id=preguntaConocioDistribuidora]',1000)
      .click('input[id=preguntaConocioDistribuidora]')
      .setValue('input[id=preguntaConocioDistribuidora]', 'VECINA')

      .waitForElementVisible('input[id=preguntaMotivoPrestamo]',1000)
      .click('input[id=preguntaMotivoPrestamo]')
      .setValue('input[id=preguntaMotivoPrestamo]', 'PAGAR COLEGIATURA')

       .waitForElementVisible('input[id=CELULAR]',1000)
       .click('input[id=CELULAR]')
       .setValue('input[id=CELULAR]', '6677567890')

       .waitForElementVisible('input[id=nombre]',1000)
       .click('input[id=nombre]')
       .setValue('input[id=nombre]', 'JUAN')


       .waitForElementVisible('input[id=apellidoPaterno]',1000)
       .click('input[id=apellidoPaterno]')
       .setValue('input[id=apellidoPaterno]', 'OCHOA')



       .waitForElementVisible('input[id=apellidoMaterno]',1000)
       .click('input[id=apellidoMaterno]')
       .setValue('input[id=apellidoMaterno]', 'CORRALES')


       .waitForElementVisible('button.btn.btn-primary',1000)
       .click('button.btn.btn-primary')
       .pause(2000) 
      
       .waitForElementVisible('input[id=email]',1000)
       .click('input[id=email]')
       .setValue('input[id=email]', 'hola@hotmail.com')


       .waitForElementVisible('input[id=FIJO]',1000)
       .click('input[id=FIJO]')
       .setValue('input[id=FIJO]', '6678898989')


     .waitForElementPresent('div.form-group .form-control.select',1000)
	 .click('div.form-group .form-control.select')
	 .setValue('div.form-group .form-control.select', 'SINALOA')


	 estadosCredencial






       }
};