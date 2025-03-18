import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  constructor(private _accountService:AccountService){
    _accountService.getAccounts().subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal Server Error");
    })
  }

}
