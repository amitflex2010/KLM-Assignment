import {
    TestBed, ComponentFixture, async, tick, fakeAsync
} from '@angular/core/testing';

import {
    FormControl,
    FormGroup,
    FormBuilder,
    ReactiveFormsModule
} from '@angular/forms';

import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {BookingComponent} from './app.booking.component';

import { BookingService } from '../service/app.booking.service';

import { HttpModule } from '@angular/http';

export class ExampleComponent {
}

describe('Component: BookingComponent', () => {
    let component: BookingComponent;
    let debugElement: DebugElement;
    let bookingService: BookingService;
    let fixture: ComponentFixture<BookingComponent>;
    let router: Router;
    let location: Location;
    beforeEach(() => {
    TestBed.configureTestingModule({
            declarations: [BookingComponent],
            imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([
                { path: 'notfound', component: ExampleComponent},
                { path: 'bookingdetails', component: ExampleComponent}
            ]), HttpModule],
            providers: [BookingService]
        }).compileComponents();
});

beforeEach(() => {
        fixture = TestBed.createComponent(BookingComponent);
        component = fixture.componentInstance;

        debugElement = fixture.debugElement;
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        bookingService = debugElement.injector.get(BookingService);
        fixture.detectChanges();
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('should create a `FormGroup` comprised of `FormBuilder`s', () => {
        component.ngOnInit();
        expect(component.form instanceof FormGroup).toBe(true);
    });

    it('should create a `FormBuilder` comprised of `FormControl`s', () => {
        component.ngOnInit();
        expect(component.frmbuilder instanceof FormBuilder).toBe(true);
    });

    it('form invalid when empty', () => {
        component.ngOnInit();
        expect(component.form.valid).toBeFalsy();

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').disabled).toBeTruthy();
        expect(component.form.valid).toBeFalsy();
    });

    it('should create a `FormControl` for each item', () => {
        component.ngOnInit();
        expect(Object.keys(component.form.controls)).toEqual([
            'bookingcode', 'familyname'
        ]);
    });

    it('bookingcode field validity', () => {
        component.ngOnInit();
        const bookingcode = component.form.controls['bookingcode'];
        expect(bookingcode.valid).toBeFalsy();
    });

    it('familyname field validity', () => {
        component.ngOnInit();
        const familyname = component.form.controls['familyname'];
        expect(familyname.valid).toBeFalsy();
    });

    it('bookingcode field requierd validity', () => {
        component.ngOnInit();
        let errors = {};
        const bookingcode = component.form.controls['bookingcode'];
        errors = bookingcode.errors || {};
        expect(errors['required']).toBeTruthy();
  });

  it('familyname field requierd validity', () => {
        component.ngOnInit();
        let errors = {};
        const familyname = component.form.controls['familyname'];
        errors = familyname.errors || {};
        expect(errors['required']).toBeTruthy();
  });

  it('bookingcode field min character length Validation', () => {
        component.ngOnInit();
        let errors = false;
        const bookingcode =  component.form.controls['bookingcode'];
        bookingcode.setValue('PZIGZ6');
        errors = bookingcode.hasError('minlength');
        expect(errors).toBeFalsy();
  });
  it('bookingcode field max character length Validation', () => {
        component.ngOnInit();
        let errors = false;
        const bookingcode =  component.form.controls['bookingcode'];
        bookingcode.setValue('PZIGZ6');
        errors = bookingcode.hasError('maxlength');
        expect(errors).toBeFalsy();
  });

  it('familyname field min character length Validation', () => {
        component.ngOnInit();
        let errors = {};
        const familyname =  component.form.controls['familyname'];
        familyname.setValue('RUUDHESP');
        errors = familyname.hasError('minlength');
        expect(errors).toBeFalsy();
  });
  it('familyname field max character length Validation', () => {
        component.ngOnInit();
        let errors = false;
        const familyname =  component.form.controls['familyname'];
        familyname.setValue('RUUDHESP');
        errors = familyname.hasError('maxlength');
        expect(errors).toBeFalsy();
  });

  it('bookingcode field allowed character Validation', () => {
        component.ngOnInit();
        let errors = false;
        const bookingcode =  component.form.controls['bookingcode'];
        bookingcode.setValue('PZIGZ6');
        errors = bookingcode.hasError('pattern');
        expect(errors).toBeFalsy();
  });

  it('familyname field allowed character Validation', () => {
        component.ngOnInit();
        let errors = {};
        const familyname =  component.form.controls['familyname'];
        familyname.setValue('RUUDHESP');
        errors = familyname.hasError('pattern');
        expect(errors).toBeFalsy();
  });

 it('should make submit button disabled when incorrect data feed', () => {
    component.form.controls['bookingcode'].setValue('23s122');
    component.form.controls['familyname'].setValue('12345');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeTruthy();
  });
it('should set the `form value` to a stringified version of our form values', () => {
        component.ngOnInit();

        component.form.controls['bookingcode'].setValue('PZIGZ3');
        component.form.controls['familyname'].setValue('RUUDHESP');
        fixture.detectChanges();
        component.onSubmit();
        fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(component.form.value).toEqual(({bookingcode: 'PZIGZ3', familyname: 'RUUDHESP'}));
         });
    });

  it(' after filling up the valid fields form should be valid now', () => {
        component.ngOnInit();

        component.form.controls['bookingcode'].setValue('PZIGZ3');
        component.form.controls['familyname'].setValue('RUUDHESP');
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').disabled).toBeFalsy();
        expect(component.form.valid).toBeTruthy();
 });

 it('should MOVE TO BOOKING DETAIL booking code  matched', async(() => {
        component.ngOnInit();
        component.form.controls['bookingcode'].setValue('PZIGZ3');
        component.form.controls['familyname'].setValue('RUUDHESP');
        fixture.detectChanges();
        spyOn(bookingService, 'getBookingDetails').and.returnValue(Observable.of({bookingCode: 'PZIGZ3'}));

        const compiled = fixture.debugElement.nativeElement;
        const button = compiled.querySelector('button');

        button.click();
        router.navigateByUrl('/bookingdetails');
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(location.path()).toEqual('/bookingdetails');
          expect(component.bookingCode).toEqual('PZIGZ3');
          expect('Booking code does not exist.').toEqual('Booking code does not exist.');
        });

      }));

 it('should give error when booking code not matched', async(() => {

    component.ngOnInit();

    component.form.controls['bookingcode'].setValue('AAAAA');
    component.form.controls['familyname'].setValue('FOO');

    fixture.detectChanges();

    spyOn(bookingService, 'getBookingDetails').and.returnValue(Observable.of({bookingCode: 'PZIGZ3'}));

    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');

    button.click();
    router.navigateByUrl('/notfound');
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(location.path()).toEqual('/notfound');
      expect(component.error.statusCode).toEqual(404);
      expect(component.error.message).toEqual('Booking code does not exist.');
    });

  }));


});
