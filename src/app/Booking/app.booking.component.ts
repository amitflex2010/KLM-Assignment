import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
    templateUrl: 'app.booking.component.html',
    styleUrls: ['./app.booking.component.sass']
   })

export class BookingComponent implements OnInit {
     form: FormGroup;
    constructor(private frmbuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    }

 ngOnInit() {
                this.form = this.frmbuilder.group({
                bookingcode: ['',  [Validators.required, Validators.minLength(5),
                Validators.maxLength(6), Validators.pattern('^[a-zA-Z2-9]+$')]],
                familyname: ['',  [Validators.required, Validators.minLength(2),
                Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')]]
            });
    }

onSubmit() {
         this.router.navigate(['/bookingdetails'],
          { queryParams: {bookingcode: this.form.value.bookingcode, familyname: this.form.value.familyname}, relativeTo: this.route });
     }

isValid(control) {
         return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
}

