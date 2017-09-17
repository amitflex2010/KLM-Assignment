import { TestBed, async,fakeAsync, inject, tick } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BookingService } from './app.booking.service';


describe('Service:BookingService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        BookingService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

it('should retrieve all results',
  inject([BookingService, XHRBackend], fakeAsync((bookingService:BookingService, mockBackend:MockBackend) => {
    var res:Response;
    mockBackend.connections.subscribe(c => {
      expect(c.request.url).toBe('assets/mock.json');
      let response = new ResponseOptions({body: '[{"name": "RUUD HESP"}]'});
      c.mockRespond(new Response(response));
    });
    bookingService.getBookingDetails('PZIGZ3').subscribe((response) => {
      res = response;
    });
    tick();
    expect(res[0].name).toBe('RUUD HESP');
  }))
);
});