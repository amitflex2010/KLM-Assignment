
import { DebugElement } from '@angular/core';
import {
  tick,
  inject,
  fakeAsync,
  ComponentFixture,
  TestBed,
  async
} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../service/app.booking.service';

import {BookingDetailComponent} from './app.bookingdetail.component';

class MockActivatedRoute {
    queryParams =  Observable.of({});
  }

describe('BookingDetailComponent: Initialized the BookingDetail Component', () => {

let component: BookingDetailComponent;
let bookingService: BookingService;
let debugElement: DebugElement;
let fixture: ComponentFixture<BookingDetailComponent>;
let route: MockActivatedRoute;

  beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpModule],
            declarations: [BookingDetailComponent],
            providers: [BookingService, { provide: ActivatedRoute, useClass: MockActivatedRoute }]
        }).compileComponents();
 });

  beforeEach(() => {
        fixture = TestBed.createComponent(BookingDetailComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        bookingService = debugElement.injector.get(BookingService);
        route = <MockActivatedRoute>TestBed.get(ActivatedRoute); // debugElement.injector.get(ActivatedRoute);
   });

     it('should findTrip when submit button clicked', async(() => {
     component.ngOnInit();
     route.queryParams = Observable.of({ bookingCode: 'PZIGZ3' });
      // fixture.whenStable().then(() => {
      fixture.detectChanges();
     // expect(component.getBookingCode()).toEqual('PZIGZ3');
     // });
     spyOn(bookingService, 'getBookingDetails').and.returnValue(Observable.of({ bookingCode: 'PZIGZ3' }));
     fixture.whenStable().then(() => {
      fixture.detectChanges();
     // expect(component.getBookingCode()).toEqual('PZIGZ3');
      expect(component.bookingData.bookingCode).toEqual('PZIGZ3');
    });

  }));

});
