import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatRadioModule
} from '@angular/material';
import {NewIntakeComponent} from '../../client/new-intake/new-intake.component';
import {ClientComponent} from '../../client/client.component';
import {CalendarModule} from 'primeng/calendar';
import {MatTabsModule} from '@angular/material';
import {ClientIntakeComponent} from '../../client-intake/client-intake.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        CalendarModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        RadioButtonModule,
        MatTableModule
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        NewIntakeComponent,
        ClientComponent,
        ClientIntakeComponent
    ],
    providers: [
        MatDatepickerModule,
    ]
})

export class AdminLayoutModule {
}
