import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users :User[]=[];
  apiUrl = environment.apiBaseUrl ;
  token :string='';

  constructor(private http :HttpClient, private router:Router) {
     }

   setAuth()  {
     httpOptions.headers.set( 'Authorization',`Bearer ${localStorage.getItem('token')}`)
    }

  getusers ():Observable<User[]>{
    this.setAuth() ;
    const  url = `${this.apiUrl}users`;
     return this.http.get<User[]>(url ,httpOptions);
  }

  deleteUser(user : User):Observable<User>{
    this.setAuth() ;
    const  url = `${this.apiUrl}users/${user.id}`;
    return this.http.delete<User>(url);
  }

register(user :User):Observable<User>{
  const  url = `${this.apiUrl}register`;
return this.http.post<User>(url, user,httpOptions );

}

login(email:string,password :string):Observable<any>{
  const  url = `${this.apiUrl}login`;
  return this.http.post<User>(url,{'email':email,'password' : password} ,httpOptions );
}

find(name:string){
  this.setAuth() ;
  const url = `${this.apiUrl}users/search/${name}`;
  return this.http.get<User[]>(url,httpOptions);
}

loggedIn(){
  this.setAuth() ;
  return  !!localStorage.getItem('token');

}
logout(){
  this.setAuth() ; 
  this.token='';
  this.router.navigate(['login']);
}

getToken(){
 return localStorage.getItem('token');
}

getLoggedUser(){
  return localStorage.getItem('user');
}
removeUser(){
  localStorage.removeItem('user');
}
}
