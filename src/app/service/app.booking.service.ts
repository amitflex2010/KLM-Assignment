import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookingService {
    constructor(private http: Http) { }

     /**
   * Get the booking data
   * @param {string} bookingCode for which details need to be fetched.
   * @returns Observable of JSON data
   * @memberof BookingService
   */

    getBookingDetails(bookingCode: string): Observable<any>  {
        const requestOptions = new RequestOptions();
        const params: URLSearchParams = new URLSearchParams();
        params.set('bookingcode', bookingCode);
        requestOptions.params = params;
        return this.http.get('../asset/mock.json', requestOptions)
                         .map((res: Response) => res.json())
                         .catch((res: Response) => this.onRequestError(res));
    }

    /**
   * Handles any http request error.
   * @param {Response} res Error object
   * @returns Observable of Error object
   * @memberof BookingService
   */

    onRequestError(res: Response) {
        const statusCode = res.status;
        const body = res.statusText;
        const error = {
          statusCode: statusCode,
          message: body
        };
        return Observable.throw(error);
      }
}
