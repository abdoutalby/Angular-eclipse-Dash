import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import { User } from 'src/app/user';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faTrash = faTrash;
  @Output()
  deleteuserEvent :EventEmitter<User> = new EventEmitter();

  @Input()
  user!: User; 

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(user: User){
    this.deleteuserEvent.emit(user);
  }

  

}
