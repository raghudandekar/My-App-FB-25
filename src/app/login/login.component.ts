import { ANALYZE_FOR_ENTRY_COMPONENTS, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })

  constructor(private _loginService:LoginService, private _router:Router){}
    login(){
    console.log(this.loginForm.value);
    this._loginService.login(this.loginForm.value).subscribe((data:any)=>{
      console.log(data);
      alert("login Successful");
      sessionStorage.setItem('token',data.token);
      this._router.navigateByUrl("/dashboard");
    },(err:any)=>{
      alert("Internal server Error!")
    })
  }

    }
  


