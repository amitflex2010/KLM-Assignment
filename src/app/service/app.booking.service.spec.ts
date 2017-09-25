import { TestBed, async, fakeAsync, inject, tick } from '@angular/core/testing';
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

it('should be created', inject([BookingService], (service) => {
    expect(service).toBeTruthy();
  }));

it('should retrieve all results',
  inject([BookingService, XHRBackend], fakeAsync((bookingService: BookingService, mockBackend: MockBackend) => {

    const mockResponse = {
          bookingCode: 'PZIGZ3',
          familyName: 'FRUUDHESP'
      };

    mockBackend.connections.subscribe(res => {
      const response = new ResponseOptions({body: JSON.stringify(mockResponse)});
      res.mockRespond(new Response(response));
    });

    bookingService.getBookingDetails('PZIGZ3').subscribe((response) => {
      expect(response.bookingCode).toBe('PZIGZ3');
      expect(response.familyName).toBe('FRUUDHESP');
    });
    tick();
  }))
);
});
