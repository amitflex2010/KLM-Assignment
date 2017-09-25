import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
templateUrl: 'app.notfound.component.html',
styleUrls: ['./app.bookingdetail.component.css']
  })

export class NotFoundComponent implements OnInit {

bookingError;
 constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
         this.route
        .queryParams
        .subscribe(params => {
            this.bookingError = JSON.parse(params['bookingError']);
        });
    }

    gotoHomePage() {
        this.router.navigate(['/']);
    }
}
