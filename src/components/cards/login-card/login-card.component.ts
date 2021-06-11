import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
 form: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});
  constructor() {

   }

  ngOnInit(): void {
  }

}
