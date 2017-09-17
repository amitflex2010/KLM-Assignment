import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphText() {
    return element(by.id('prgrph')).getText();
  }

  getSubmitButton() {
    return element(by.css('button'));
  }

  getBookingCodeText() {
   return element(by.id('bookingcode'));
  }
  getFamilyNameText() {
    return element(by.id('familyname'));
  }

  getCurrentURL() {
   return browser.driver.getCurrentUrl();
  }

  navigateToDetailPage() {
    return browser.get('/bookingdetails');
  }

   getBookingCodeDetail() {
    return element(by.css('app-root h1')).getText();
  }
}
