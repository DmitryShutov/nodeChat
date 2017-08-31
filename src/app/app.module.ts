import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './routes';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MdButtonModule, MdInputModule} from '@angular/material';
import {SocketService} from './services/socket.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { MainMessageScreenComponent } from './main-message-screen/main-message-screen.component';
import { UsersListComponent } from './main-message-screen/users-list/users-list.component';
import {MessagesService} from './services/messages.service';
import {AuthService} from './services/auth.service';
import {UsersService} from './services/users.service';
import {NetworkService} from './services/network.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SendMessageComponent,
    MainMessageScreenComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
  ],
  providers: [HttpClient, SocketService, MessagesService, AuthService, UsersService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
