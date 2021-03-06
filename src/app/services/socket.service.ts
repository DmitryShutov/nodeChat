import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';

const SERVER_ADDRESS = 'http://localhost:3100';

@Injectable()
export class SocketService {

  private host: string = SERVER_ADDRESS;
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect(this.host);
    this.socket.on('connect', () => this.connected());
    this.socket.on('disconnect', () => this.disconnected());
    this.socket.on('error', (error: string) => {
      console.log(`ERROR: "${error}" (${this.host}`);
    });
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  emit(channel: string, message: any) {
    return new Observable<any>(observer => {
      console.log(`emit to ${channel}:`, message);
      this.socket.emit(channel, message, (data) => {
        if (data.success) {
          observer.next(data.msg);
        } else {
          observer.error(data.msg);
        }
        observer.complete();
      });
    });
  }

  on(event_name: any) {
    console.log(`listen to ${event_name}:`);
    return new Observable<any>(observer => {
      this.socket.off(event_name);
      this.socket.on(event_name, (data) => {
        observer.next(data);
      });
    });
  }

  disconnected() {
    console.log('Disconnected');
  }

  connected() {
    console.log('Connected');
  }

}

export { SERVER_ADDRESS };
