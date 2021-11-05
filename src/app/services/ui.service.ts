import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private shown :boolean = false;
  private subject =new Subject<any>();

  constructor() { }

  show(){
    this.shown = !this.shown;
    this.subject.next(this.shown);
  }

  onshow():Observable<any>{

    return this.subject.asObservable();
  }


}
