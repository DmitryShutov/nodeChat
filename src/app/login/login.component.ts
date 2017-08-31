import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {NetworkService} from '../services/network.service';
import {User} from '../models/user.model';

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
    private router: Router,
    private authservice: AuthService,
    private http: NetworkService,
  ) { }

  ngOnInit() {
  }

  onLogin(data) {
    if (data.result && data.result === 'success') {
      this.authservice.setUser(data.username);
      this.router.navigate(['/main']);
    }
  }

  sendLogin() {
    const user: User = new User(this.login, this.password);
    this.http.login(user)
      .then((currentUser: User) => console.log(currentUser));
  }

}
