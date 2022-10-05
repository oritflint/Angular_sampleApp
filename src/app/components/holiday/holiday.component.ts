import { Component, Input } from '@angular/core';
import { Holiday } from '../../models/holiday.interface';
import { holType } from '../../models/holiday.interface';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent {

  constructor() { }

  get holidayTypeEnum(){
    return holType
  }

  @Input()  holiday?: Holiday;

}
