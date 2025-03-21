import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  pinterestdata:any=[];
  constructor(private _pinterest:PinterestService){
    this._pinterest.getpinterest().subscribe((data:any)=>{
      console.log(data);
      this.pinterestdata=data;
    },(error:any)=>{
      alert("Internal Server Error!");
    }
  )
  }
  
 
  

}
