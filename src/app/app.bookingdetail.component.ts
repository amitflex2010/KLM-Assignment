import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {BookingService } from './app.booking.service'



@Component({
   
    templateUrl: 'app.bookingdetail.component.html',
    styles:  [`
        table {
    border-collapse: collapse;
    width: 100%;
    border:1px solid #ddd;
    
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
tr:nth-child(even){background-color: #f2f2f2}

 @media only screen and (min-width: 770px)  
{
    .responsiveStyle
    {
        border: 1px solid #003145; padding: 10px; margin-top:30px;
        width:388px;
        
    }
    .container
    {
        display: flex;
        justify-content: center;
    }
    
}
    `]
   
})

export class BookingDetailComponent implements OnInit {
    
    
     bookingCode;
     bookingData;
     
    constructor(private route: ActivatedRoute,private bookingService: BookingService) { }

    ngOnInit() {
       this.route
        .queryParams
        .subscribe(params => {
            this.bookingCode = params['bookingcode'];
           //let familyname = params['familyname'];
        });

        this.bookingService.getBookingDetails(this.bookingCode).
        subscribe(data => {this.bookingData = data;}, error => {console.log(error);});
        
    }

    getPassengerName()
    {
        return this.bookingData.passengers.title.name+". "+this.bookingData.passengers.firstName+" "+this.bookingData.passengers.lastName
    }

    getFlightNumber()
    {
        return this.bookingData.itinerary.connections[0].segments[0].marketingFlight.number;
    }

    getFlightOrigin()
    {
        return this.bookingData.itinerary.connections[0].origin.city.name;
    }
    
    getFlightDestination()
    {
        return this.bookingData.itinerary.connections[0].destination.city.name;
    }

    getFlightDuration()
    {
        return this.bookingData.itinerary.connections[0].duration;
    }
   
}