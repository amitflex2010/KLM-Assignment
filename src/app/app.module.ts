import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {BookingComponent} from './app.booking.component';
import {BookingDetailComponent} from './app.bookingdetail.component';
import {BookingService } from './app.booking.service'

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingDetailComponent
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
