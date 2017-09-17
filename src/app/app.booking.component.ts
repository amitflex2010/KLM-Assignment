import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
   
    
    templateUrl: 'app.booking.component.html',
    styleUrls: ['./app.booking.component.sass']
   
})

export class BookingComponent implements OnInit {
    

    form:FormGroup;
    frmbuilder:FormBuilder;
    constructor(private fb: FormBuilder, private router: Router,private route: ActivatedRoute) {
        this.frmbuilder  = fb;
    }

    ngOnInit() 
    {
        this.form = this.frmbuilder.group({
                bookingcode: ['',  [Validators.required,bookingCodeValidation(5,6,'length'), isAlphaNumeric("alphaNumeric")]],
                familyname: ['',  [Validators.required, familyNameValidation(2,30,"length"), isAlphabet("alphabet")]]
            });
    }

   
     onSubmit() 
     { 
         console.log(this.form.value)
         this.router.navigate(["/bookingdetails"],
          { queryParams: {bookingcode: this.form.value.bookingcode, familyname: this.form.value.familyname}, relativeTo: this.route });
     }

    isValid(control) 
    {

        return this.form.controls[control].invalid && this.form.controls[control].touched
    }
}

function  isAlphaNumeric(alphaNumeric:string)
{
    return function(control) 
    {   
        let regex = /^[a-zA-Z2-9]*$/;
        return regex.test(control.value) ? null : { [alphaNumeric]: true }
    }
}

function  isAlphabet(alphabet:string)
{
    return function(control) 
    { 
        let regex = /^[a-zA-Z]*$/;
        return regex.test(control.value) ? null :  { [alphabet]: true };;
    }
}
function bookingCodeValidation(min:Number, max:Number,lengthValidation:string) 
{
    return function(input) 
    {
         return (input.value.length >= min && input.value.length <=max) ? null : {[lengthValidation]: true };
    };
}

function familyNameValidation(min:Number, max:Number,lengthValidation:string) 
{
   return function(input) 
    {
         return (input.value.length >= min && input.value.length <=max) ? null : { [lengthValidation]: true };
    };
}