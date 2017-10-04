import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
templateUrl: 'app.notfound.component.html',
styleUrls: ['./app.bookingdetail.component.sass']
  })

export class NotFoundComponent implements OnInit {

bookingError: any;
 constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
         this.route
        .queryParams
        .subscribe(params => {
            this.bookingError = ({statuscode: params['statuscode'], message: params['message']});
        });
    }

    /**
   * Function to go to Searchpage.
   * @param none
   * @memberof BookingDetailComponent
   */

    gotoHomePage() {
        this.router.navigate(['/']);
    }
}
