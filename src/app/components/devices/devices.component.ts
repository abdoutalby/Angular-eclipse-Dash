import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/device';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  search!:any;
  devices :Device[] =[];

  constructor(private deviceservice :DevicesService) { }

  ngOnInit(): void {
    this.deviceservice.getdevices().subscribe((devices)=>this.devices=devices);
  }

  delete(device :Device){
    this.deviceservice
    .deletedevice(device)
    .subscribe();  
this.deviceservice.getdevices().subscribe((devices)=>{
  this.devices=devices;
});
  }

  adddevice(device :Device){
    this.deviceservice.add(device).subscribe(
      (device)=>(
        this.devices.push(device)
      )
    )
    this.devices =[];
    this.deviceservice.getdevices().subscribe((devices)=>this.devices=devices);
  }

  onattach(device :Device){
    this.deviceservice.attachto(device).subscribe(
      (device)=>(
       this.devices.push(device)
      )
    )
    this.devices =[];
    this.deviceservice.getdevices().subscribe((devices)=>this.devices=devices);
  }

  findDevice(search:any){
   this.deviceservice.find(search).subscribe((devices)=>{

    this.devices=devices ;
    this.search='';
   }
    );
  }
}
