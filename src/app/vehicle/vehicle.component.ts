import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
constructor(private _VehicleService:VehicleService){
  _VehicleService.getVehicles().subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
  },(error:any)=>{
    alert("Internal Server Error");
  }
)
}
}
