import { AppPage } from './app.po';

describe('assignment-klm App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display RETRIVE YOUR BOOKING message', () => {
    page.navigateTo();
    expect(page.getPageTitleText()).toEqual('RETRIVE YOUR BOOKING');
  });
  
  it('should display paragraph message', () => {
    page.navigateTo();
    let paragraphtext = "You can find your booking by filling out your family name and booking code in your booking confirmation."
    expect(page.getParagraphText()).toEqual(paragraphtext);
  });
  it('should got to detail page', () => {
    
    let bookingCode = page.getBookingCodeText();
    let familyName = page.getFamilyNameText(); 
    let submitButton = page.getSubmitButton();
    'PZIGZ3'.split('').forEach((c) => bookingCode.sendKeys(c));
    'WER'.split('').forEach((c) => familyName.sendKeys(c));

    submitButton.click().then(() => {
     expect(page.getCurrentURL()).toMatch('/bookingdetails');
      });

  });
 
   it('should display Booking Code on Detail page', () => {
    page.navigateToDetailPage();
    expect(page.getBookingCodeDetail()).toEqual('PZIGZ3');
  });
});
