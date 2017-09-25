import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import {BookingComponent} from './Booking/app.booking.component';
import {BookingDetailComponent} from './BookingDetail/app.bookingdetail.component';
import {NotFoundComponent } from './BookingDetail/app.notfound.component';
import {BookingService } from './service/app.booking.service';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
