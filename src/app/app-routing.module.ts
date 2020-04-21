import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './CommonServices/auth.guard';//router Guard
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'Search', component: MainComponent },
  { path: 'patientDetail', component: PatientDetailComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
