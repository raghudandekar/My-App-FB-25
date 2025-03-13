import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisible:boolean=true;

  states:string[]=['Ap','Ka','Ke','Mh','Tn','Tg'];
  products:any=[
    {name:'pen',price:10,rating:3.7},
    {name:'book',price:50,rating:2.5}, 
    {name:'shirt',price:500,rating:3.5},
    {name:'shoes',price:1000,rating:1.9},
    {name:'bike',price:55000,rating:4.5},
    {name:'car',price:1000000,rating:5.0},

  ]
   newDate:any=new Date();

}
