import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from "@angular/router";

import { LoginService } from './services/login.service'
import { AuthguardGuard } from './authguard.guard';
import { Authguard2Guard } from './authguard2.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomComponent } from './components/room/room.component';

const appRoutes:Routes = [
  {path: '',component: HomeComponent},
  {path: 'login',canActivate: [Authguard2Guard],component: LoginComponent},
  {path: 'register',canActivate: [Authguard2Guard],component: RegisterComponent},
  {path: 'chat',canActivate: [AuthguardGuard],component: ChatComponent},
  {path: 'room',canActivate: [AuthguardGuard],component: RoomComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    HomeComponent,
    RegisterComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthguardGuard,
    Authguard2Guard,
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }