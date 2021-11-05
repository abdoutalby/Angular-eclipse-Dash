import { Component, OnInit, Output } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: any;
  constructor(private userservice : UserServiceService) { }

  ngOnInit(): void {
      this.username = this.userservice.getLoggedUser();
  }

}
