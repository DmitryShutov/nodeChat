import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    const formModel = this.form.value;
    console.log(formModel);
  }

}
