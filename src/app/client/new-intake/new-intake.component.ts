import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-intake',
  templateUrl: './new-intake.component.html',
  styleUrls: ['./new-intake.component.scss']
})
export class NewIntakeComponent implements OnInit {

  constructor() { }
    date3: Date;
    states = [
        {name: 'Arizona', abbrev: 'AZ'},
        {name: 'California', abbrev: 'CA'},
        {name: 'Colorado', abbrev: 'CO'},
        {name: 'New York', abbrev: 'NY'},
        {name: 'Pennsylvania', abbrev: 'PA'},
    ];
    foods: any[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  ngOnInit() {
  }

}
