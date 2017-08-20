import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../services/messages.service';
import {Message} from '../models/message.model';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user.model';
import {NgForm} from '@angular/forms';

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

  onSubmit(form: NgForm) {
    const message = new Message(form.value.content, this.currentUser.login);
    this.messageService.addMessage(message).subscribe(
      data => console.log('data'),
      error => console.log('error'),
      () => console.log('complete'),
    );
  }

}
