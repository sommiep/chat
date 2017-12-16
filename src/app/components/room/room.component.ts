import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../services/login.service'
import { RouterModule, Router } from '@angular/router'
import { Room } from '../../model/room.model';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers:[ServicesService]
})
export class RoomComponent implements OnInit {

  newroom = new Room()
  room:Room[];
  
  constructor(private loginService:LoginService, private service:ServicesService, private router:Router) { }

  ngOnInit() {
    this.service.getRoom().subscribe(room => this.room = room)
  }

  logout() {
    this.loginService.logout()
  }

  create() {
    this.service.CreateRoom(this.newroom).subscribe(newroom => (null))
    sessionStorage.setItem("room", this.newroom.name)
    this.router.navigate(['/chat']);
  }

  chat(name) {
    sessionStorage.setItem("room", name)
    this.router.navigate(['/chat']);
  }
}