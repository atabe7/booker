import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggainComponent } from './loggain/loggain.component';
import { OmossComponent } from './omoss/omoss.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'loggain', component: LoggainComponent },
    { path: 'omoss', component: OmossComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: DashboardComponent }
];