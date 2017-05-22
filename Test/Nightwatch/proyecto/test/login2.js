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
      //.useXpath()
      //.waitForElementVisible("//div[@id='Select.distribuidora-form']/div/div[3]/div/div/div/p/b",1000)
      .waitForElementPresent('div.container.select-distribuidora',1000)
      .waitForElementPresent('div.Select.distribuidora-form',1000)
      .waitForElementPresent('div.Select-control',1000)

      //.waitForElementPresent('span[id=react-select-2--value]',1000)
      //.waitForElementPresent('div.Select-value]',1000)

      //.waitForElementPresent('span[id=react-select-2--value-item]',1000)

      .waitForElementPresent('div.Select.distribuidora-form > div.Select-control > span[id=react-select-2--value].Select-multi-value-wrapper > div.Select-input', 1000)

      .click('div.Select.distribuidora-form > div.Select-control > span[id=react-select-2--value].Select-multi-value-wrapper > div.Select-input')
      //.setValue('input[div.Select.distribuidora-form > div.Select-control > span[id=react-select-2--value].Select-multi-value-wrapper > div.Select-input]','l6')
     //browser.expect.element('div.row > div.columns:first-child > h2 > i').text.to.be.equal('Hello');
     //.assert.value('div.Select.distribuidora-form > div.Select-control > span[id=react-select-2--value].Select-multi-value-wrapper > div.Select-input','16')
     .waitForElementPresent('div.Select-input',1000)
    // .setValue('div.Select.distribuidora-form > div.Select-control > span[id=react-select-2--value].Select-multi-value-wrapper > div.Select-input','16')
    //.setReactSelect('div.Select-input','16')


      .pause(1000)





      .end();
  }
};
