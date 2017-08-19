import { Component, OnInit } from '@angular/core';
import {SocketService} from '../services/socket.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  credentials: {};


  constructor(
    private socket: SocketService,
    private router: Router,
    private authservice: AuthService,
  ) { }

  ngOnInit() {
    this.socket.on('login').subscribe(
      data => this.onLogin(data),
      err => console.log(err),
    );
  }

  onLogin(data) {
    if (data.result && data.result === 'success') {
      this.authservice.setUser(data.username);
      this.router.navigate(['/main']);
    }
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
