import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Device } from 'src/app/device';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  showed :boolean = false;
  sub: Subscription ;

  @Output() onadd:EventEmitter<Device> = new EventEmitter();
  @Output() ondel:EventEmitter<Device> = new EventEmitter();
  
  id?:number;
  owner!: number;
  serial!: number;
  status!: number;

  emptyonwner!:number;
  
  
  constructor(private uiservice :UiService) { 
    this.sub = this.uiservice.onshow().subscribe(value => this.showed = value);

  }

  ngOnInit(): void {
  }

  adddevice(){
    const newdevice = {
      owner:this.owner,
      serial : this.serial,
      status:this.status
    }
    this.onadd.emit(newdevice);
    this.owner=this.emptyonwner;
    this.serial =this.emptyonwner;
    this.status =this.emptyonwner;
  }

  delete(device : Device){
      this.ondel.emit(device);
  }

}
