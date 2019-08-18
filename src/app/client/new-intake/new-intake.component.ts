import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-new-intake',
    templateUrl: './new-intake.component.html',
    styleUrls: ['./new-intake.component.scss']
})
export class NewIntakeComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            firstName: [null, [Validators.required]],
            middleName: [null],
            lastName: [null, [Validators.required]],
            date: [new Date(), [Validators.required]],
            dateOfBirth: [new Date(), [Validators.required]],
            email: [null, [Validators.required]]
        });
        // this.firstName = this.form.controls['firstName'];
        // this.middleName = this.form.controls['middleName'];
        // this.lastName = this.form.controls['lastName'];
    }

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

    private saveData(event) {
        event.preventDefault();

        if (this.form.valid) {
            console.log(this.form.value); // Process your form
        }
        // console.log(this.form.firstName.value);
    }

}
