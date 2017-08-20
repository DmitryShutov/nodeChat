import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../services/messages.service';
import {Message} from '../models/message.model';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  private currentUser: User;

  constructor(private messageService: MessagesService,
              private authService: AuthService,
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getUser();
  }

  onSendMessage(value: string) {
    if (!value) {
      return;
    }
    const message = new Message(value, this.currentUser.login);
  }

}
