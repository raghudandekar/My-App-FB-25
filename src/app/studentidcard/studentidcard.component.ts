import { Component } from '@angular/core';
import { Studentidcardservices } from '../studentidcard.service';

@Component({
  selector: 'app-studentidcard',
  templateUrl: './studentidcard.component.html',
  styleUrls: ['./studentidcard.component.css']
})
export class StudentidcardComponent {
  students:any=[];
  constructor(private _Studentidcardsevice:Studentidcardservices){
    this._Studentidcardsevice.getstudentidcard().subscribe((data:any)=>{
      console.log(data);
    this.students=data;
    },(err:any)=>{
      alert("Internal Server Error!");
    })
  }

}
