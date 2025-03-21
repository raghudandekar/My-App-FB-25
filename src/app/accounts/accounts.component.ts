import { Component, TemplateRef } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {


  accounts:any=[];
  constructor(private _accountService:AccountService){
    this.loadaccounts();
  }

  loadaccounts(){
  this._accountService.getAccounts().subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal Server Error");
    })
  }
  
    
  term:string='';
  filter(){
    this._accountService.getFilteredAccounts(this.term).subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("internal Server Error!");
    })
  }

  column:string='';
  order:string='';
  sort(){
    this._accountService.getsortaccounts(this.column,this.order).subscribe((data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
      alert("Internal Server Error!");
    })
  }

  delete(id:any){
    if(confirm("Are you sure to delete?")==true){
      this._accountService.deleteaccounts(id).subscribe((data:any)=>{
        alert("Record Deleted Successfully!")
        this.loadaccounts();
      },(err:any)=>{
        alert("Internal Server Error!");
      })
      
    }else{
      alert("You Have cancelled");
    
  }
  }

  limit:string='';
page:string='';
pagination(){
  this._accountService.getpaginationaccounts(this.limit,this.page).subscribe((data:any)=>{
    console.log(data);
    this.accounts=data;
  },(err:any)=>{
    alert("Internal Server Error!")
  })
  }
  

}
