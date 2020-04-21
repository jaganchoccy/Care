import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr'; //alert
//Http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../app/CommonServices/interceptor.service';

//ngx
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//primeng
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AutoCompleteModule } from 'primeng/autocomplete';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
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
    AutoCompleteModule
  ],
  providers: [
    ShareDataService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
