import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {
  OwlDateTimeComponent, DateTimeAdapter, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE,
  OwlDateTimeFormats
} from 'ng-pick-datetime';

import * as _moment from 'moment';
import {Moment} from 'moment';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

export const MY_MOMENT_DATE_TIME_FORMATS: OwlDateTimeFormats = {
  parseInput: 'MM/YYYY',
  fullPickerInput: 'l LT',
  datePickerInput: 'MM/YYYY',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};

@Component({
  selector: 'app-datetime-pickers',
  templateUrl: './datetime-pickers.component.html',
  styleUrls: ['./datetime-pickers.component.scss'],
  providers: [
    // `MomentDateTimeAdapter` and `OWL_MOMENT_DATE_TIME_FORMATS` can be automatically provided by importing
    // `OwlMomentDateTimeModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    // {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},

    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_DATE_TIME_FORMATS}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatetimePickersComponent implements OnInit {
  public selectedMoment = new Date();
  public selectedMoments = [
    new Date(2018, 1, 12, 10, 30),
    new Date(2018, 3, 21, 20, 30)
  ];

  public datetime1 = new Date();
  public datetime2 = new FormControl(new Date());
  public datetime3 = [new Date(2018, 1, 12, 10, 30), new Date(2018, 3, 21, 20, 30)];

  // Open the picker at this (March 15 2019, 20:30) moment
  public startAt = new Date(2019, 2, 15, 20, 30);

  public datetime4 = new FormControl(moment());

  // Min moment: June 12 2018, 10:30
  public min = new Date(2018, 6, 12, 10, 30);

  // Max moment: Aug 15 2018, 20:30
  public max = new Date(2018, 7, 15, 20, 30);

  public dateTime5: Date;

  public myFilter = ((d: Date): boolean => {
    const dtObj = new Date(d);
    const day = dtObj.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  });

  public invalidDateTime1 = new Date(2018, 3, 26, 20, 30);

  public invalidDateTime2 = new Date(2018, 3, 22, 20, 30);

  public invalidDateTime3 = 'Invalid Date Time Value';

  public invalidDateTime4 = [new Date(2018, 3, 22, 20, 30), new Date(2018, 3, 12, 20, 30)];

  constructor() {
  }

  ngOnInit() {
  }

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.datetime4.value;
    ctrlValue.year(normalizedYear.year());
    this.datetime4.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: OwlDateTimeComponent<Moment>) {
    const ctrlValue = this.datetime4.value;
    ctrlValue.month(normalizedMonth.month());
    this.datetime4.setValue(ctrlValue);
    datepicker.close();
  }

}
