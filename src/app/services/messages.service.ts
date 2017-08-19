import { Message } from '../models/message.model';

export class MessagesService {
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
