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

      .waitForElementVisible('button[id="pro"]',1000)
      .click('button[id="pro"]')
      .click('button[id="pro"]')
      .pause(1000)

      .setValue('input[id=nombreClienteValidacion','hassil piña medina')
      .pause(1000)


       .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
       .click('button.btn.btn-success.btn-lg')
       .pause(2000) 

       .waitForElementVisible('input[id=folio]',1000)
       .setValue('input[type=text]', '904475')
       .waitForElementVisible('input[id=folio]',1000)
       .pause(1000)

//Selecciona el Total de la Venta
      .waitForElementVisible('select[id=importe]',1000)
      .pause(1000)
      .setValue('select[id=importe]','1000')
      .pause(3000)    

      

      //Selecciona el número de quincenas
      //.waitForElementVisible('select[id="plazo"]',4000)
      
      //Aquí se selcciona el botón de Donativo 10 pesos "NO"
.waitForElementVisible('button.btn.btn-danger',1000)
.click('button.btn.btn-danger')
.pause(2000)

//Selecciona el número de quincenas
.waitForElementVisible('select[id=plazo]',2000)
.setValue('select[id=plazo]','10')
.pause(2000)

//Aquí se selcciona el botón de Donativo 10 pesos "NO"
.waitForElementVisible('button.btn.btn-danger',1000)
.click('button.btn.btn-danger')
.pause(3000)

//Aquí se selcciona el botón de Donativo 5 pesos "NO"
.waitForElementVisible('button.btn.btn-danger',1000)
.click('button.btn.btn-danger')
.pause(2000)
.click('button.btn.btn-danger')
.pause(4000)

//Aquí se selcciona el botón de Siguiente.
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
.click('button.btn.btn-success.btn-lg')
.pause(3000)



      
       //Mi PARTE
       //primera parte seleccion de tipo de deposito 
       .waitForElementVisible('input[id="noStp"]',1000)
       .click('input[id="noStp"]')

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
      

     .waitForElementVisible('button.btn.btn-success.btn-lg',1000)
     .click('button.btn.btn-success.btn-lg')
     .pause(2000)


     .useCss()
     .waitForElementVisible('button.btn.btn-primary.btn-lg',1000)
     .click('button.btn.btn-primary.btn-lg')
     .pause(2000)

      //segunda parte te dice el horario de banco--botones continuar y atras



      //tercera parte te muestra una modal --aceptar y cancelar

      //colocar cheque y folio --imprimir cheque
      //boton continuar
      //muestra mensaje que si ya se imprimio
      //grabar
      //imprimir documentos

    //.end();
  }
};