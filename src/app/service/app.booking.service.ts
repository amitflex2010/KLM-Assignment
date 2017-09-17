import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookingService {
    constructor(private http: Http) { }

    getBookingDetails(bookingCode: string): Observable<any>  {
         return this.http.get('assets/mock.json')
                         .map((res: Response) => res.json());
    }
}
