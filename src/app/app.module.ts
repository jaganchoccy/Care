import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr'; //alert
//chartJS
import { ChartsModule } from 'ng2-charts';
//Http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../app/CommonServices/interceptor.service';

//ngx

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//primeng
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {TableModule} from 'primeng/table';
//service
import { ShareDataService } from './CommonServices/share-data.service';
//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { VitalSignsComponent } from './components/vital-signs/vital-signs.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AppointHistComponent } from './components/appoint-hist/appoint-hist.component';
import { MediDataComponent } from './components/medi-data/medi-data.component';
import { ReportComponent } from './components/report/report.component';
import { AppmtDetailsComponent } from './components/appmt-details/appmt-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    FooterComponent,
    MainComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    PatientDetailComponent,
    PatientInfoComponent,
    VitalSignsComponent,
    ActivitiesComponent,
    AppointHistComponent,
    MediDataComponent,
    ReportComponent,
    AppmtDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    ChartsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    TabViewModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      enableHtml: true,
    }),
    ReactiveFormsModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ButtonModule,
    AutoCompleteModule,
    Ng2SearchPipeModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
