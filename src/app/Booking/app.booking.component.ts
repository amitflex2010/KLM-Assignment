import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BookingService } from '../service/app.booking.service';

@Component({
    templateUrl: 'app.booking.component.html',
    styleUrls: ['./app.booking.component.sass']
   })

export class BookingComponent implements OnInit {
     form: FormGroup;
     frmbuilder: FormBuilder;
     bookingCode: string;
     error = {
     statusCode: 404,
     message: 'Booking code does not exist.'
     };
    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private bookingService: BookingService) {
        this.frmbuilder = fb;
}

ngOnInit() {
this.createForm();
}

/**
   * Create and initialize the form model with required
   * validation.
   * @memberof BookingComponent
   */

createForm() {
    this.form = this.frmbuilder.group({
        bookingcode: ['',  [Validators.required,
                            Validators.minLength(5),
                            Validators.maxLength(6),
                            Validators.pattern('^[a-zA-Z2-9]+$')]],
        familyname: ['',   [Validators.required,
                            Validators.minLength(2),
                            Validators.maxLength(30),
                            Validators.pattern('^[a-zA-Z]+$')]]
        });
}

/**
   * Submit the form and call getBookings with bookingcode.
   * @param {any} bookingCode
   * @memberof BookingComponent
   */

onSubmit() {
    this.getBookings(this.form.value.bookingcode);
}

/**
   * Retrive the Booking details and handle error if any
   * @param {any} bookingCode
   * @memberof BookingComponent
   */

getBookings(bookingCode) {

        this.bookingService.getBookingDetails(this.form.value.bookingcode).
        subscribe( data => {
            this.bookingCode = data.bookingCode;
        if (bookingCode.toUpperCase() === data.bookingCode) {
          this.router.navigate(['/bookingdetails'],
          {
              queryParams: {bookingcode: data.bookingCode}, relativeTo: this.route });
        }else {
          this.router.navigate(['/notfound'],
          { queryParams: {statuscode: 404, message: 'Booking code does not exist.'}});
        }
      },
      error => {
        console.log(error);
        this.form.reset();
      }
    );

}

/**
   * To check passed control is valid
   * @param {FormControl} control
   * @memberof BookingComponent
   */

isValid(control) {
         return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
}

