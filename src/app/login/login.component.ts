import { Component, OnInit } from '@angular/core';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  credentials: {};


  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.socket.on('login').subscribe(
      data => console.log(data),
      err => console.log(err),
    );
  }

  sendLogin() {
    this.credentials = {
      login: this.login,
      password: this.password,
    };
    this.socket.emit('login', this.credentials).subscribe(
      (data) => console.log('success', data),
      (error) => console.log('error', error),
      () => console.log('complete'),
    );
  }

}
