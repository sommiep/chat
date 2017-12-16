import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[ServicesService]
})
export class RegisterComponent implements OnInit {

  user = new User()
  
  constructor(private service:ServicesService) { }

  ngOnInit() {
  }

  register() {
    this.user.status = 0
    this.service.Create(this.user).subscribe(user => (null))
  }
}