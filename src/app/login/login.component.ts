import { Component, OnInit } from '@angular/core';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string;
  password: string;
  credentials: {};


  constructor(private socket: SocketService) { }

  sendLogin() {
    this.credentials = {
      login: this.login,
      password: this.password,
    };
    this.socket.emit('auth', this.credentials).subscribe(
      (data) => console.log('success', data),
      (error) => console.log('error', error),
      () => console.log('complete'),
    );
  }

}
