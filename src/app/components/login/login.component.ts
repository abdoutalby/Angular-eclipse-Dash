import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  
  

  email!: string;
  password!: string;

  constructor(private userservice :UserServiceService
    ,private router:Router) {

   }

  ngOnInit(): void {
  }
  login():any{
    

      if(this.valide()){
        this.userservice.login(this.email,this.password).subscribe(data=> {
        this.user=data;
        localStorage.setItem ('token' , this.user.token) ;
        localStorage.setItem ('user' , data.user.name) ;
        this.router.navigate(['/home']);
      },
      err=>{
        alert('wrong details please verify')
      }
      );
    } 
  }

  valide() : boolean{
  if(! this.email ){
      alert('please provide email details ');
      return false;
  }else if(! this.password ){
    alert('please provide password details ');
    return false;}
    else
    return true;
 
  }
 
  }

