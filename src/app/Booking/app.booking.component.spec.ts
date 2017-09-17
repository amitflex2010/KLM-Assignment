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
            imports: [ReactiveFormsModule,RouterTestingModule]
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

     it('should create a `FormControl` for each item', () => {
       
        component.ngOnInit();

        expect(Object.keys(component.form.controls)).toEqual([
            'bookingcode', 'familyname'
        ]);
    });

     it('should set the `form value` to a stringified version of our form values', () => {
        
        component.ngOnInit();

        component.form.controls['bookingcode'].setValue('PZIGZ3');
        component.form.controls['familyname'].setValue('RUUD HESP');
        component.onSubmit();

        expect(component.form.value).toEqual(({bookingcode: 'PZIGZ3', familyname: 'RUUD HESP'}));
    });
    
});
