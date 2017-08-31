import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SERVER_ADDRESS } from './socket.service';

@Injectable()
export class NetworkService {

  loginUrl = `${SERVER_ADDRESS}/login`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(user: User): Promise<User> {
    return this.http.post(this.loginUrl, { user }, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
      .map((response: Response) => {
        const userData = response.json();
        console.log(userData);
        return userData;
      })
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }

}
