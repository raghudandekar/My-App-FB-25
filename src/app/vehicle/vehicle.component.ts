import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  term:string='';
  vehicles:any=[];
constructor(private _VehicleService:VehicleService){
  this.loadVehicles();
}
loadVehicles(){
  this._VehicleService.getVehicles().subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
  },(error:any)=>{
    alert("Internal Server Error!");
  }
)
}

filter(){
  this._VehicleService.getFilteredVechicles(this.term).subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
  },(err:any)=>{
    alert("Internal Server Error!");
  })
}
column:string='';
order:string='';

sort(){
  this._VehicleService.getSortVehicles(this.column,this.order).subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
  },(err:any)=>{
    alert("Internal Sefver Error!");

  })
}

delete(id:any){
  if(confirm("Are you sure to delete?")==true){
    this._VehicleService.deleteVehicle(id).subscribe((data:any)=>{
      alert("Record Deleted Successfully!")
      this.loadVehicles();
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
  this._VehicleService.getpaginationVehicles(this.limit,this.page).subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
  },(err:any)=>{
    alert("Internal Server Error!")
  })
  }
}


