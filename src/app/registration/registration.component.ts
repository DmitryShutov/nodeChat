import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  form: FormGroup;
  regData: {
    login: string,
    password: string,
  };

  constructor(fb: FormBuilder, private socket: SocketService) {
    this.form = fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    this.regData = this.form.value;
    this.sendRegData();
  }

  sendRegData() {
    this.socket.emit('registrate', this.regData).subscribe(
      (data) => {
        console.log('Success');
      },
      error => console.log('Error', error),
      () => console.log('complete')
    );
  }

}
