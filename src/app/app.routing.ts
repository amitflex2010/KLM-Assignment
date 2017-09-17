import { Routes, RouterModule } from '@angular/router';

import {BookingComponent} from './app.booking.component';
import {BookingDetailComponent} from './app.bookingdetail.component';


const appRoutes: Routes = [
    { path: '', component: BookingComponent },
   
    { path: 'bookingdetails', component: BookingDetailComponent },
  
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);