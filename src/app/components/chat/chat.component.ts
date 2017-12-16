import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../services/login.service'
import { RouterModule } from '@angular/router'
import { Chat } from '../../model/chat.model';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[ServicesService]
})
export class ChatComponent implements OnInit {

  chat:Chat[]
  newchat = new Chat()
  room = new Chat()
  
  constructor(private loginService:LoginService, private service:ServicesService) { }

  ngOnInit() {
    this.service.getChat(sessionStorage.getItem("room")).subscribe(chat => this.chat = chat);
    this.room.room = sessionStorage.getItem("room")
  }

  logout() {
    this.loginService.logout()
  }

  send() {
    this.newchat.room = sessionStorage.getItem("room")
    this.newchat.username = sessionStorage.getItem("name")
    this.service.CreateChat(this.newchat).subscribe(chat => this.newchat = null)
    location.reload()
  }

  admin() {
    if(sessionStorage.getItem("status") == "1")
      return true
    else
      return false
  }

  del(id) {
    this.service.deleteChat(id).subscribe(() => console.log("user deleted"));
    location.reload()
  }
}