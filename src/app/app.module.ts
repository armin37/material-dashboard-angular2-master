import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {
    AgmCoreModule
} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {NewIntakeComponent} from './client/new-intake/new-intake.component';
import {ClientComponent} from './client/client.component';
import {MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {ClientIntakeComponent} from './client-intake/client-intake.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ClGeneralInfoComponent } from './client-intake/cl-general-info/cl-general-info.component';
import { ClCfsDetailsComponent } from './client-intake/cl-cfs-details/cl-cfs-details.component';
import { ClGuardianshipKinshipComponent } from './client-intake/cl-guardianship-kinship/cl-guardianship-kinship.component';
import { ClFamilyTreeComponent } from './client-intake/cl-family-tree/cl-family-tree.component';
import { ClChildrenDetailComponent } from './client-intake/cl-children-detail/cl-children-detail.component';
import { ClCfsTimelineComponent } from './client-intake/cl-cfs-timeline/cl-cfs-timeline.component';
import { ClPersonalAssessmentComponent } from './client-intake/cl-personal-assessment/cl-personal-assessment.component';
import { ClOpportunityComponent } from './client-intake/cl-opportunity/cl-opportunity.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        RadioButtonModule

    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
    ],
    providers: [MatDatepickerModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
