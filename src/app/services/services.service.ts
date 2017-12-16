import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/Observable';
import { Room } from '../model/room.model';
import { Chat } from '../model/chat.model';

@Injectable()
export class ServicesService {

  constructor(private http: HttpClient) { }

  Create(user:User) : Observable<User>{
    return this.http.post<User>("http://localhost:9990/users" , user)
  }

  checkUser(username : String , password : String) : Observable<User[]>{
    return this.http.post<User[]>("http://localhost:9990/users/check",{username,password})
  }

  CreateRoom(room:Room) : Observable<Room>{
    return this.http.post<Room>("http://localhost:9990/rooms" , room)
  }

  getRoom() : Observable<Room[]>{
    return this.http.get<Room[]>("http://localhost:9990/rooms")
  }

  CreateChat(chat:Chat) : Observable<Chat>{
    return this.http.post<Chat>("http://localhost:9990/chats" , chat)
  }

  getChat(roomname:String) : Observable<Chat[]>{
    return this.http.get<Chat[]>("http://localhost:9990/chats/" + roomname)
  }

  deleteChat(id:String) : Observable<Chat>{
    return this.http.get<Chat>("http://localhost:9990/chats/delete/" + id)
  }
}