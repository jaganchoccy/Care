import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './CommonServices/auth.guard';//router Guard
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'Search', component: MainComponent },
  { path: 'patientDetail', component: PatientDetailComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'patientList', component: PatientListComponent },
  { path: 'doctorList', component: DoctorListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
