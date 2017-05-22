module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://54.71.172.143:3000/#/?_k=5gjkho')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('input[type=text]', 1000)
      .setValue('input[type=text]', 'samm')

      .waitForElementVisible('input[id=password]',1000)
      .setValue('input[id=password]','s')

      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .pause(5000)
      .useXpath()
      .waitForElementPresent("//form[@id='seleccionSucursalForm']/div/div/select",1000)
      //.select("//form[@id='seleccionSucursalForm']/div/div/select",'CENTRO SINALOA')
      .click("//form[@id='seleccionSucursalForm']/div/div/select")
      //.assert.value("//form[@id='seleccionSucursalForm']/div/div/select", 62)
      //.click('select[id="myselectbox"] option[value="somevalue"]')
      .setValue("//form[@id='seleccionSucursalForm']/div/div/select",'CENTRO SINALOA')
      .click("//form[@id='seleccionSucursalForm']/div/div/select")
      .useCss()
      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .useXpath()
      .waitForElementPresent("//div[@id='contenido']/div/div[3]/div/div/div/p/b",1000)
      .click("//div[@id='contenido']/div/div[3]/div/div/div/p/b")
      .useCss()
      .waitForElementVisible('select[id=tipodevale]',1000)
      .pause(5000)
      .setValue('select[id=tipodevale]','001-VALEDINERO')

      .pause(1000)
    .waitForElementPresent('div.Select.distribuidora-form .Select-control .Select-input',1000)
    .pause(1000)


.click('div.Select.distribuidora-form.Select .Select-control')
.click('div.Select.distribuidora-form.Select .Select-control')
.setValue('div.Select.distribuidora-form.Select .Select-control .Select-input input', '8')
.pause(10000)
.sendKeys('div.Select.distribuidora-form.Select .Select-control .Select-input input', browser.Keys.ENTER)

.waitForElementPresent('div.modal-footer',1000)
.waitForElementPresent('button.btn.btn-success',1000)
.click('div.modal-footer > button.btn.btn-primary')

// Se omitió el codigo de preguntas de clientes nuevos

// .waitForElementVisible('input[id=preguntaConocioDistribuidora]',1000)
// .click('input[id=preguntaConocioDistribuidora]')
// .setValue('input[id=preguntaConocioDistribuidora]', 'PRIMA DE UN AMIGO')

// .waitForElementVisible('input[id=preguntaMotivoPrestamo]',1000)
// .click('input[id=preguntaMotivoPrestamo]')
// .setValue('input[id=preguntaMotivoPrestamo]', 'VACACIONES A ALEMANIA')

// .waitForElementVisible('input[id=fechaNacimientoSearch]',1000)
// .click('input[id=fechaNacimientoSearch]')
// .setValue('input[id=fechaNacimientoSearch]', '12/10/1985')
// .sendKeys('input[id=fechaNacimientoSearch]', browser.Keys.ENTER)


// .waitForElementPresent('div.Select-placeholder',1000)

// .click('.Select.buscar2 .Select-control')
// .click('.Select.buscar2 .Select-control')

// .setValue('.Select.buscar2 .Select-control .Select-input input', 'JOSE FELIX')


.waitForElementPresent('div.Select-placeholder',1000)

.click('.Select.buscar2 .Select-control')
.click('.Select.buscar2 .Select-control')

.waitForElementVisible('input[id=celularSearch]',1000)
.pause(5000)
.click('input[id=celularSearch]')
.click('input[id=celularSearch]')

.setValue('input[id=celularSearch]','6677012345')
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

// Agregó felix
.waitForElementVisible('input[id=nombreClienteValidacion]',1000)
.setValue('input[id=nombreClienteValidacion]','JOSE FELIX BARRIOS BAUTISTA')
.pause(1000)

//Continuar a la pantalla 3
.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
.click('button.btn.btn-success.btn-lg')
.pause(2000)

//Inicia pantalla 3 Proceso FELIX

.waitForElementVisible('input[id=folio]',1000)
.setValue('input[type=text]', '408')
.waitForElementVisible('input[id=folio]',1000)
.pause(1000)

//Selecciona el Total de la Venta
.waitForElementVisible('select[id=importe]',1000)
.pause(1000)
.setValue('select[id=importe]','1000')
.pause(3000)

//Inserta de nuevo en el folio
.waitForElementVisible('input[id=folio]',1000)
.setValue('input[type=text]', '')
.waitForElementVisible('input[id=folio]',1000)
.pause(1000)

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

// INICIA LA PANTALLA 4

.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
.click('button.btn.btn-success.btn-lg')
.pause(2000)

.setValue('input[id=pinUsuario]','123456')
.pause(2000)

.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
.click('button.btn.btn-primary')
.pause(3000)
.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
.click('button.btn.btn-success.btn-lg')
.click('button.btn.btn-success.btn-lg')
.pause(3000)

.waitForElementVisible('input[id=noStp]',1000)
.click('input[id="noStp"]')
.click('input[id="noStp"]')
.pause(3000)

.waitForElementVisible('button.btn.btn-success.btn-lg',1000)
.click('button.btn.btn-success.btn-lg')
.pause(3000)

.waitForElementVisible('button[id="obtener"]',1000)
.click('button[id="obtener"]')
.pause(3000)

// Alert Box

// .assertTrue(closeAlertAndGetItsText().matches("^¿Estás seguro que desea continuar con el opción de cheques[\\s\\S]$"));

.pause(5000);







      //.end();
  }
};
