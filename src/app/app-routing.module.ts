import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { CalcultorComponent } from './calcultor/calcultor.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { HomeComponent } from './home/home.component';
import { BMIComponent } from './bmi/bmi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountService } from './account.service';
import { AccountsComponent } from './accounts/accounts.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentidcardComponent } from './studentidcard/studentidcard.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'calcultor',component:CalcultorComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'rectangle',component:RectangleComponent},
    // {path:'profile',component:ProfileComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BMIComponent},
        {path:'bmi',component:BMIComponent},
        {path:'vehicle',component:VehicleComponent},
        {path:'accounts',component:AccountsComponent},
        {path:'pinterest',component:PinterestComponent},
        {path:'flipkart',component:FlipkartComponent},
        {path:'mail',component:MailComponent},
        {path:'create-vehicle',component:CreateVehicleComponent},
        {path:'create-account',component:CreateAccountComponent},
        {path:'studentidcard',component:StudentidcardComponent},
        {path:'create-user',component:CreateUserComponent},





    
  ]}, 
     
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
