import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {BookingService } from '../service/app.booking.service';



@Component({
templateUrl: 'app.bookingdetail.component.html',
styleUrls: ['./app.bookingdetail.component.sass']
  })

export class BookingDetailComponent implements OnInit {
     bookingCode: string;
     bookingData: any;
     constructor(private router: Router, private route: ActivatedRoute, private bookingService: BookingService) { }

    ngOnInit() {
       this.route.queryParams
        .subscribe(params => {
            this.bookingCode = (params['bookingcode']);
        });

        this.bookingService.getBookingDetails(this.bookingCode).
        subscribe( data => {
           this.bookingData = data;
        },
        error => {
        console.log(error);
      });
    }

    /**
   * To get booking code.
   * @param none
   * @memberof BookingDetailComponent
   */
    getBookingCode() {
        return this.bookingCode;
    }

    /**
   * To get PassengerName.
   * @param none
   * @memberof BookingDetailComponent
   */
    getPassengerName() {
        return this.bookingData.passengers.title.name
        + '. ' + this.bookingData.passengers.firstName + ' ' + this.bookingData.passengers.lastName;
    }

  /**
   * To get FlightNumber.
   * @param none
   * @memberof BookingDetailComponent
   */

    getFlightNumber() {
        return this.bookingData.itinerary.connections[0].segments[0].marketingFlight.number;
    }

    /**
   * To get FlightOrigin.
   * @param none
   * @memberof BookingDetailComponent
   */
    getFlightOrigin() {
        return this.bookingData.itinerary.connections[0].origin.city.name;
    }

    /**
   * To get FlightDestination.
   * @param none
   * @memberof BookingDetailComponent
   */

    getFlightDestination() {
        return this.bookingData.itinerary.connections[0].destination.city.name;
    }

    /**
   * To get FlightDuration.
   * @param none
   * @memberof BookingDetailComponent
   */

    getFlightDuration() {
        return this.bookingData.itinerary.connections[0].duration;
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
