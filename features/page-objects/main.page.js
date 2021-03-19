const { config } = require('../../wdio.conf');
class Main {
    get welcomeTermsContainer() {
        return $('.welcome__content');
    }

    get agreeTermsBtn() {
        return $('.welcome__agree');
    }

    get welcomeCookiesContainer() {
        return $('.welcome__cookie-notice');
    }

    get agreeCookiesBtn() {
        return $('.welcome__button--accept');
    }

    get transferToggleOption(){
        return $('.transfer__toggle-options');
    }

    get initialFirstUpload(){
        return $('.uploader__files')
    }

    get transferBtn(){
        return $('.transfer__button')
    }

    get transferSpinnerContainer(){
        return $('.transfer__spinner')
    }

    get transferSpinnerProgress(){
        return $('.spinner__label')
    }

    acceptTerms(){
        if(this.welcomeTermsContainer.isDisplayed() === true){
            this.agreeTermsBtn.waitForDisplayed({ timeout : 10000, reverse : false, timeoutMsg : `accept terms button did not display within ${this.timeout}`})
            this.agreeTermsBtn.click()
        }}

    acceptCookies(){
        this.waitUntilElementDisplayed(this.welcomeTermsContainer)
        if(this.welcomeCookiesContainer.isDisplayed() === true){
            this.agreeCookiesBtn.waitForDisplayed({ timeout : 10000, reverse : false, timeoutMsg : `agree cookies policy button did not display within 1000`})
            this.agreeCookiesBtn.click()
        }
    }

    subscriptionDecline(){
        if ($('.plan').waitForDisplayed() === true){
            $('.free-button').waitForEnabled()
            $('.free-button').click()
        }
    }

    waitForTextfieldAndSetInput(field,value) {
        $(`.textfield*=${field}`).waitForDisplayed()
        $(`.textfield*=${field}`).click()
        $(`.textfield*=${field}`).$('input').setValue(value)
    }

    waitForTransferProgress100Percent(){
        browser.waitUntil(
            () => {
                return this.transferSpinnerProgress.getText() === '100%';
            },
            {
                timeout:300000,

                timeoutMsg: `progress did not reach 100% within `,
            },
        );
    }

    waitUntilElementDisplayed(element){
        browser.waitUntil(
            () => {
                return element.isDisplayed() === true;
            },
            {
                timeout: config.waitforTimeout,
                timeoutMsg: `${element} did not display within ${config.waitforTimeout/1000} seconds`,
            },
        );
    }

    waitForDisplayedClickAndSetValue(element, value){
        $(element).waitForDisplayed()
        $(element).click()
        $(element).setValue(value)
    }

    waitForElementAndClick(element){
        $(element).waitForDisplayed()
        $(element).click()
    }

    waitForEnabledBtnAndClick(button) {
        $(button).waitForDisplayed()
        $(button).waitForEnabled()
        $(button).click()
    }
}

module.exports = new Main();
