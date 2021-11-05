import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() search:any;
  users :User[] = [];
  constructor(private userservice : UserServiceService) { }

  ngOnInit(): void {
    this.userservice.getusers().subscribe((users)=>(this.users=users));
  }

  deleteUser(user :User){
    this.userservice
    .deleteUser(user)
    .subscribe(
      ()=> {(this.users = this.users.filter((u) =>u.id !== user.id));
        alert('deleted '+user.name);
      },
      ()=>{
        
      }
      );
 
        this.userservice.getusers().subscribe((users)=>(this.users=users))
  }
  adduser(user : User){
    console.log(user);
    this.userservice.register(user).subscribe((user)=>(this.users.push(user)));
    this.userservice.getusers().subscribe((users)=>(this.users=users));
 
  }

  findUser(search:any){
    this.userservice.find(search).subscribe((users)=>{
      this.users=users;
      this.search='';
    })
   }

}
