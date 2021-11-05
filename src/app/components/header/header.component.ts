import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()title!: string;
  showed: boolean=true;
  sub !:Subscription;
  @Output() findEv :EventEmitter<any>=new EventEmitter();

  search!: string;

  constructor(private uiservice :UiService) { 
    this.sub = this.uiservice.onshow().subscribe(value => this.showed = value);
  }

  ngOnInit(): void {
  }

  show(){
    this.uiservice.show();
    this.showed =!this.showed;
  }

  find(){
      this.findEv.emit(this.search);
  }

}
