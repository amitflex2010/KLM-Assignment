
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

import {NotFoundComponent} from './app.notfound.component';


describe('NotFoundComponent: Initialized the NotFound Component', () => {

let component: NotFoundComponent;
let debugElement: DebugElement;
let fixture: ComponentFixture<NotFoundComponent>;
let activatedRoute: ActivatedRoute;

const error = {
    statuscode: 404,
    message: 'Booking code does not exist.'
    };


  beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpModule],
            declarations: [NotFoundComponent],
            providers: [{
                provide: ActivatedRoute, useValue: {
                    queryParams: (Observable.of({'bookingError': {statuscode: 404, message: 'Booking code does not exist.'}}))
              }}]
        }).compileComponents();
 });

  beforeEach(() => {
        fixture = TestBed.createComponent(NotFoundComponent);
        component = fixture.componentInstance;
        activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);

        debugElement = fixture.debugElement;
   });

     it('Not found details: ErrorCode: 404 & message: Booking code does not exist.', async(() => {
     component.ngOnInit();
     fixture.detectChanges();
     fixture.whenStable().then(() => {
     fixture.detectChanges();
     const bookingError = activatedRoute.queryParams['value'].bookingError;
     expect(bookingError.statuscode).toEqual(error.statuscode);
     expect(bookingError.message).toEqual(error.message);
    });

  }));

});
