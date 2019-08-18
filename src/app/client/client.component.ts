import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface PeriodicElement {
    Account: number;
    Name: string;
    Email: string;
    Phone: string;
    Address: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
    {
        Account: 1251,
        Name: 'Franco Steele',
        Email: 'francosteele@sealoud.com',
        Phone: '+1 (991) 500-3168',
        Address: '681 Test Address Full Lenght Bartlett Street, Macdona, Indiana, 606'
    },
    {
        Account: 9822,
        Name: 'Erin Le',
        Email: 'erinle@sealoud.com',
        Phone: '+1 (903) 550-3586',
        Address: '208 Aurelia Court, Muir, Maryland, 6116'
    },
    {
        Account: 3952,
        Name: 'Ilene Cameron',
        Email: 'ilenecameron@sealoud.com',
        Phone: '+1 (927) 433-3627',
        Address: '469 Bath Avenue, Woodburn, Washington, 8982'
    },
    {
        Account: 4745,
        Name: 'Tamika Armstrong',
        Email: 'tamikaarmstrong@sealoud.com',
        Phone: '+1 (859) 402-2190',
        Address: '625 Landis Court, Teasdale, Idaho, 1342'
    },
    {
        Account: 5635,
        Name: 'Silva Neal',
        Email: 'silvaneal@sealoud.com',
        Phone: '+1 (838) 599-2644',
        Address: '936 Madison Place, Newcastle, New Jersey, 1076'
    },
    {
        Account: 6526,
        Name: 'Betsy Mcintyre',
        Email: 'betsymcintyre@sealoud.com',
        Phone: '+1 (816) 427-2100',
        Address: '583 Cozine Avenue, Rose, Nebraska, 5281'
    },
    {
        Account: 4726,
        Name: 'Betsy Mcintyre',
        Email: 'betsymcintyre@sealoud.com',
        Phone: '+1 (816) 427-2100',
        Address: '583 Cozine Avenue, Rose, Nebraska, 5281'
    },
    {
        Account: 6676,
        Name: 'Betsy Mcintyre',
        Email: 'betsymcintyre@sealoud.com',
        Phone: '+1 (816) 427-2100',
        Address: '583 Cozine Avenue, Rose, Nebraska, 5281'
    },
    {
        Account: 1426,
        Name: 'Betsy Mcintyre',
        Email: 'betsymcintyre@sealoud.com',
        Phone: '+1 (816) 427-2100',
        Address: '583 Cozine Avenue, Rose, Nebraska, 5281'
    }
];

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
    displayedColumns: any[] = ['Index', 'Account', 'Name', 'Email', 'Phone', 'Address', 'btn'];
    dataSource = ELEMENT_DATA;

    advocates: any[] = [
        {value: '1', viewValue: 'All'},
        {value: '2', viewValue: 'Steak'},
        {value: '3', viewValue: 'Pizza'},
        {value: '4', viewValue: 'Tacos'}
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToClientIntake() {
        this.router.navigate(['clientIntake']);
    }
}
