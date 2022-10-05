import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { Holiday, holType } from '../../models/holiday.interface';
import { HolidayComponent } from '../holiday/holiday.component';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  title = 'HolidaysComponents works perfect!';
  public listOfHolidays: Holiday[]=[
    {
      name: 'Rosh-hashana',
      mainConduct: 'shofar',
      rating: 7.5,
      holidayDate: new Date(),
      holidayType: holType.coupleDays
    },
    {
      name: 'Yom-kipur',
      mainConduct: 'fast',
      rating: 9.6,
      holidayDate: new Date(),
      holidayType: holType.singleDay
    },
    {
      name: 'Sukkot',
      mainConduct: 'sukka',
      rating: 9.2,
      holidayDate: new Date(),
      holidayType: holType.weekLong
    },
    {
      name: 'Simches Tora',
      mainConduct: 'kriat HaTora',
      rating: 5.1,
      holidayDate: new Date(),
      holidayType: holType.singleDay
    },
  ]
  
  
  ngOnInit(){
    console.log("On Init")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Change!!!!:"+changes)
  }

  ngAfterViewInit(){
    console.log("After View Init")
  }

  ngOnDestroy(): void {
    console.log("On Destroy") 
  }

}

