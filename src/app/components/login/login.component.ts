import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { RouterModule, Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServicesService]
})
export class LoginComponent implements OnInit {

  user = new User()
  
  constructor(private service:ServicesService, private loginService:LoginService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.service.checkUser(this.user.username , this.user.password).subscribe(user => {
      console.log("pass")
      console.log(user)
      sessionStorage.setItem("status", user[0].status.toString())
      if(user.length === 0){
        console.log("not match")
        alert('login fail')
      }else {
        alert('login success')
        this.loginService.login(this.user.username)
      console.log("success")
      this.router.navigate(['/room']);
    }
    })
  }
}