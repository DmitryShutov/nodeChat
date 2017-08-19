import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable()
export class AuthService {
  private currentUser: User;

  public setUser(user) {
    this.currentUser = new User(user, null);
  }

  public getUser() {
    return this.currentUser;
  }

}
