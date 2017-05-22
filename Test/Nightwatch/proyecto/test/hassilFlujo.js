module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://54.71.172.143:3000/#/?_k=5gjkho')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('input[type=text]', 1000)
      .setValue('input[type=text]', 'laura')

      .waitForElementVisible('input[id=password]',1000)
      .setValue('input[id=password]','l')

      .waitForElementVisible('button.btn.btn-success',1000)
      .click('button.btn.btn-success')
      .pause(5000)
      .useXpath()
      .waitForElementPresent("//form[@id='seleccionSucursalForm']/div/div/select",1000)
      //.select("//form[@id='seleccionSucursalForm']/div/div/select",'CENTRO SINALOA')
      .click("//form[@id='seleccionSucursalForm']/div/div/select")
      //.assert.value("//form[@id='seleccionSucursalForm']/div/div/select", 62)
      //.click('select[id="myselectbox"] option[value="somevalue"]')
      .setValue("//form[@id='seleccionSucursalForm']/div/div/select",'TEPIC')
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
.setValue('div.Select.distribuidora-form.Select .Select-control .Select-input input', '5')
.pause(10000)
.sendKeys('div.Select.distribuidora-form.Select .Select-control .Select-input input', browser.Keys.ENTER)

.waitForElementPresent('div.modal-footer',1000)
.waitForElementPresent('button.btn.btn-success',1000)
.click('div.modal-footer > button.btn.btn-primary')

.waitForElementVisible('input[id=preguntaConocioDistribuidora]',1000)
.click('input[id=preguntaConocioDistribuidora]')
.setValue('input[id=preguntaConocioDistribuidora]', 'AMIGA')

.waitForElementVisible('input[id=preguntaMotivoPrestamo]',1000)
.click('input[id=preguntaMotivoPrestamo]')
.setValue('input[id=preguntaMotivoPrestamo]', 'VACACIONES EN CANCUN')

.waitForElementVisible('input[id=fechaNacimientoSearch]',1000)
.click('input[id=fechaNacimientoSearch]')
.setValue('input[id=fechaNacimientoSearch]', '02/08/1968')
.sendKeys('input[id=fechaNacimientoSearch]', browser.Keys.ENTER)


.waitForElementPresent('div.Select-placeholder',1000)

.click('.Select.buscar2 .Select-control')
.click('.Select.buscar2 .Select-control')

.setValue('.Select.buscar2 .Select-control .Select-input input', 'PATRICIA')


.waitForElementPresent('div.Select-placeholder',1000)

.click('.Select.buscar2 .Select-control')
.click('.Select.buscar2 .Select-control')

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
      .pause(1000);








      //.end();
  }
};
