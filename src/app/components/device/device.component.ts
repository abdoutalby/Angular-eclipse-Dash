import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Device } from 'src/app/device';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  faTrash = faTrash;
  clicked=false;


    @Output()
    Event :EventEmitter<Device> = new EventEmitter();
    @Output()
    deleteDeviceEvent :EventEmitter<Device> = new EventEmitter();
    @Output()
    attach:EventEmitter<Device> = new EventEmitter();
        
    @Input()
    device!: Device; 
    @Input()
    owner !:number;
    @Input()
    id !:number;
    
  constructor() { 
   
  }

  ngOnInit(): void {}
  
    delete(device: Device){
      this.deleteDeviceEvent.emit(device);
    }
    ondbl()
    {
      this.clicked=!this.clicked;
    }
     onattach(device :Device){
       device.owner=this.owner;
      this.attach.emit(device)
    }
  }


