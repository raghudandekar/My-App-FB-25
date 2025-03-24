import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from "@angular/common/http";
import { AccountsComponent } from './accounts/accounts.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentidcardComponent } from './studentidcard/studentidcard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleDetailsclearComponent } from './vehicle-detailsclear/vehicle-detailsclear.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    WelcomeComponent,
    ProfileComponent,
    CalcultorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    HomeComponent,
    DatabindingComponent,
    DirectivesComponent,
    EmployeeComponent,
    VehicleComponent,
    AccountsComponent,
    PinterestComponent,
    FlipkartComponent,
    MailComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
    VehicleDetailsclearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
