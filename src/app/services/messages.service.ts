import { Message } from '../models/message.model';
import {SocketService} from './socket.service';
import {Injectable} from '@angular/core';

@Injectable()
export class MessagesService {
  constructor(private io: SocketService) {}
  private messages: Message[] = [];

  addMessage(message: Message) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }

  deleteMessages(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

}
