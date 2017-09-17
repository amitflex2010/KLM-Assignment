import {
    TestBed
} from '@angular/core/testing';

import {
    FormControl,
    FormGroup,
    FormBuilder,
    ReactiveFormsModule
} from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';

import {BookingComponent} from './app.booking.component';

describe('Component: BookingComponent', () => {
    let component: BookingComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BookingComponent],
            imports: [ReactiveFormsModule, RouterTestingModule]
        });

        const fixture = TestBed.createComponent(BookingComponent);
        component = fixture.componentInstance;
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

  it(' after filling up the valid fields form should be valid now', () => {
        component.ngOnInit();

        component.form.controls['bookingcode'].setValue('PZIGZ3');
        component.form.controls['familyname'].setValue('RUUDHESP');
       expect(component.form.valid).toBeTruthy();
 });

     it('should set the `form value` to a stringified version of our form values', () => {
        component.ngOnInit();

        component.form.controls['bookingcode'].setValue('PZIGZ3');
        component.form.controls['familyname'].setValue('RUUDHESP');
        component.onSubmit();

        expect(component.form.value).toEqual(({bookingcode: 'PZIGZ3', familyname: 'RUUDHESP'}));
    });
});
