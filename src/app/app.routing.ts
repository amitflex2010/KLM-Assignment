import { Routes, RouterModule } from '@angular/router';

import {BookingComponent} from './Booking/app.booking.component';
import {BookingDetailComponent} from './BookingDetail/app.bookingdetail.component';


const appRoutes: Routes = [
    { path: '', component: BookingComponent },
   
    { path: 'bookingdetails', component: BookingDetailComponent },
  
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);