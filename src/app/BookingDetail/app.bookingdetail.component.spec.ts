
import { DebugElement } from '@angular/core';
import {
  tick,
  inject,
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


describe('BookingDetailComponent: Initialized the BookingDetail Component', () => {

let component: BookingDetailComponent;
let bookingService: BookingService;
let debugElement: DebugElement;
let fixture: ComponentFixture<BookingDetailComponent>;


  beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpModule],
            declarations: [BookingDetailComponent],
            providers: [BookingService]
        }).compileComponents();
 });

  beforeEach(() => {
        fixture = TestBed.createComponent(BookingDetailComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        bookingService = debugElement.injector.get(BookingService);
   });

     it('should findTrip when submit button clicked', async(() => {
     component.ngOnInit();
     fixture.detectChanges();
     spyOn(bookingService, 'getBookingDetails').and.returnValue(Observable.of({ bookingCode: 'PZIGZ3' }));
     fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.bookingData.bookingCode).toEqual('PZIGZ3');
    });

  }));

});
