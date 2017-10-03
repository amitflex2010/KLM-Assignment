import { AppPage } from './app.po';

describe('assignment-klm App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('The Heading should be RETRIVE YOUR BOOKING', () => {
    page.navigateTo();
    expect(page.getPageTitleText()).toEqual('RETRIVE YOUR BOOKING');
  });
  it(`This paragraph will let you know that You can find your booking by filling
  out your family name and booking code in your booking confirmation.`, () => {
    page.navigateTo();
    const paragraphtext = 'You can find your booking by filling out your family name and booking code in your booking confirmation.';
    expect(page.getParagraphText()).toEqual(paragraphtext);
  });
  it('After filling up all the fields it should go to page where flight and passenger details will be found.', () => {
    const bookingCodetext = page.getBookingCodeText();
    const familyNametext = page.getFamilyNameText();
    const submitButton = page.getSubmitButton();
    const bookingcode = 'PZIGZ3';
    const familyName = 'WER';
    bookingcode.split('').forEach((c) => bookingCodetext.sendKeys(c));
    familyName.split('').forEach((c) => familyNametext.sendKeys(c));

    submitButton.click().then(() => {
     expect(page.getCurrentURL()).toMatch('/bookingdetails');
      });

  });

 it('On the Flight Detail page you can get Booking code and other details.', () => {
    page.navigateToDetailPage();
    expect(page.getBookingCodeDetail()).toEqual('PZIGZ3');
    const closeButton = page.getCloseButton();

    closeButton.click().then(() => {
      page.navigateTo();
    });
  });


  it('After filling wrong details it should go to details not found page.', () => {
    const bookingCodetext = page.getBookingCodeText();
    const familyNametext = page.getFamilyNameText();
    const submitButton = page.getSubmitButton();
    const bookingcode = 'FSFGDH';
    const familyName = 'WER';
    bookingcode.split('').forEach((c) => bookingCodetext.sendKeys(c));
    familyName.split('').forEach((c) => familyNametext.sendKeys(c));

    submitButton.click().then(() => {
     expect(page.getCurrentURL()).toMatch('/notfound');
      });

    });
});
