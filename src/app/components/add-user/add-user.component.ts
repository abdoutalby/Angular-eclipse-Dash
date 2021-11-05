import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { User } from 'src/app/user';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  showed :boolean = false;
  sub :Subscription;

  @Output()
  adduser:EventEmitter<User> = new EventEmitter();

  name!: string;
  email!: string;
  password!: string;
  password_confirmation!: string;
  token : string ='';


  constructor(private uiservice :UiService) { 
    this.sub = this.uiservice.onshow().subscribe(value => this.showed = value);

  }

  ngOnInit(): void {
  }

  userregister(){
   

      const reguser = {
        name : this.name,
        email:this.email,
        password:this.password,
        password_confirmation :this.password_confirmation,
        token:this.token
       
      }

      if(this.password_confirmation !== this.password){
        alert('password not matching');
        return;
      }else
      if(!this.password){
        alert('password cannot be empty');
        return;
      }else
      if(!this.email){
        alert('email cannot be empty');
        return;
      }else
      if(!this.name){
        alert('name cannot be empty');
        return;
      }
      this.adduser.emit(reguser);
      this.email='';
      this.name='';
      this.password_confirmation='';
      this.password = '';
      this.token='';
    }

  
}
