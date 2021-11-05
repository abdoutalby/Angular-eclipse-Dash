import { HttpClient ,HttpHeaders ,HttpInterceptor} from '@angular/common/http';
import { Injectable,  } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../device';
import { UserServiceService } from './user-service.service';
import { environment } from 'src/environments/environment';


let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Accept':'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devices :Device[]=[];
  api = environment.apiBaseUrl ;
  userservice !: UserServiceService
  apiUrl = `${this.api}devices`;

  constructor(private http :HttpClient ,userservice :UserServiceService) {
    httpOptions.headers.set( 'Authorization',`Bearer ${localStorage.getItem('token')}`)
   }

  getdevices ():Observable<Device[]>{
   
     return this.http.get<Device[]>(this.apiUrl ,httpOptions);
  }

  deletedevice(device :Device):Observable<Device>{
    const  url = `${this.apiUrl}/${device.id}`;
    return this.http.delete<Device>(url,{});
  }

add(device :Device):Observable<Device>{
return this.http.post<Device>(this.apiUrl,{'owner':device.owner,'status':device.status,'serial':device.serial} ,httpOptions );
}

attachto(device :Device):Observable<Device>{
  const  url = `${this.apiUrl}/${device.id}`;
  return this.http.put<Device>(url, {'owner':device.owner,'id':device.id},httpOptions );
}

find(find : number):Observable<Device[]>{
  const  url = `${this.apiUrl}/find/${find}`;
  return this.http.get<Device[]>(url);
}


}
