const { Given, When, Then } = require('cucumber');
const mainPage = require('../page-objects/main.page');
const fileUpload = require('../utils/fileUploadUtils');

Given('I am on the homepage page', () => {
    browser.url(`https://wetransfer.com/`);
});

When('I select {string} in the transfer options',(transferOption)=>{
    mainPage.waitForElementAndClick('.transfer__toggle-options')
    mainPage.waitForElementAndClick(`.radioinput__label*=${transferOption}`)
});

When('I fill in the email fields', (table) => {
    table.rows().forEach(itemName => {
        const field = itemName[0];
        const email = itemName[1];
        mainPage.waitForTextfieldAndSetInput(field,email)
      });
    });

When('I fill in the message area {string}',(msg) => {
    mainPage.waitForDisplayedClickAndSetValue('textarea[name="message"]',msg)
    expect($('textarea[name="message"]').getText()).to.eql(msg)
});

When('I select a single file to upload {string}',(filename)=>{
    fileUpload.uploadSingleFileFromTestFolder(filename)
});

When('I select a single file type to upload {string}',(testFileType)=>{
    fileUpload.uploadSingleFileTypeFromTestFolder(testFileType)
});

When('I upload the following files',(table)=>{
    table.raw().forEach(filename => {
        fileUpload.uploadSingleFileFromTestFolder(filename)
    });
});

Then('The transfer completed successfully',()=>{
    mainPage.waitForEnabledBtnAndClick('.transfer__button')
    $('.transfer__spinner').waitForDisplayed()
    $('.complete__text').waitForDisplayed({timeout : 240000, reverse : false, timeoutMsg : `file/s did not upload within 4 minutes`})
    expect($('.complete__text').getText()).to.eql('Copy your download link or see what\'s inside')
});

Then('The transfer link is generated',()=>{
    $('.transfer-link__url').waitForDisplayed() 
    uploadTransferLink = $('.transfer-link__url').getValue()
    expect(uploadTransferLink).to.not.eql('')
});


