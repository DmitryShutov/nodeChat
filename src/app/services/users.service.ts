import { Injectable } from '@angular/core';
import {SocketService} from './socket.service';

@Injectable()
export class UsersService {

  constructor(private socket: SocketService) { }

  getUsersList() {
    return this.socket.emit('users', 'get users');
  }
}
