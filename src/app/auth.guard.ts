import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { UserServiceService } from './services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : UserServiceService,private router :Router){}
  canActivate() : boolean{

    if(this.auth.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      alert('Login Please');
      return false;
    }
  }
   
  }
  
