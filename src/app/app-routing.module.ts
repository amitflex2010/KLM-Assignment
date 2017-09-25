import { Routes, RouterModule } from '@angular/router';

import {BookingComponent} from './Booking/app.booking.component';
import {BookingDetailComponent} from './BookingDetail/app.bookingdetail.component';
import { NotFoundComponent } from './BookingDetail/app.notfound.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full'},
    { path: 'search', component: BookingComponent },
   { path: 'bookingdetails', component: BookingDetailComponent },
   { path: 'notfound', component: NotFoundComponent },
   { path: '**', redirectTo: '/search' }
];

export const routing = RouterModule.forRoot(appRoutes);
