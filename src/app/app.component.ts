import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-FB-25';
  accounts:any=[];
  constructor(private _accountService:AccountService){
    _accountService.getAccounts().subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;
    },(error:any)=>{
      alert("Internal Server Error");
    }
  )
  }
}
