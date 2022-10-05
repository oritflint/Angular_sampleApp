import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HolidaysComponent} from './components/holidays/holidays.component';
import { HolidayComponent } from './components/holiday/holiday.component'

@NgModule({
  declarations: [
    AppComponent,
    HolidaysComponent,
    HolidayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
