import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {BookingService } from '../service/app.booking.service';



@Component({
templateUrl: 'app.bookingdetail.component.html',
styleUrls: ['./app.bookingdetail.component.css']
  })

export class BookingDetailComponent implements OnInit {
     bookingCode;
     bookingData;
     constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

    ngOnInit() {
       this.route
        .queryParams
        .subscribe(params => {
            this.bookingCode = params['bookingcode'];
        });

        this.bookingService.getBookingDetails(this.bookingCode).
        subscribe(data => {this.bookingData = data; }, error => {console.log(error); });
        }

    getPassengerName() {
        return this.bookingData.passengers.title.name
        + '. ' + this.bookingData.passengers.firstName + ' ' + this.bookingData.passengers.lastName;
    }

    getFlightNumber() {
        return this.bookingData.itinerary.connections[0].segments[0].marketingFlight.number;
    }

    getFlightOrigin() {
        return this.bookingData.itinerary.connections[0].origin.city.name;
    }

    getFlightDestination() {
        return this.bookingData.itinerary.connections[0].destination.city.name;
    }

    getFlightDuration() {
        return this.bookingData.itinerary.connections[0].duration;
    }

}
