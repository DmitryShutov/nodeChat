import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable()
export class AuthService {
  private currentUser: User;
  private USER_KEY_IN_LOCAL_STORAGE = 'currentUser';

  public setUser(user) {
    this.currentUser = new User(user, null);
    localStorage.setItem('USER_KEY_IN_LOCAL_STORAGE', JSON.stringify(this.currentUser));
  }

  public getUser() {
    const userFromStorage = JSON.parse(localStorage.getItem('USER_KEY_IN_LOCAL_STORAGE'));
    return this.currentUser || userFromStorage;
  }

  public login() {

  }

}
