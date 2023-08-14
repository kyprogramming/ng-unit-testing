import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() loginSuccess = new EventEmitter<boolean>();
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.loginForm = this.formBuilder.group({
      username:['', [Validators.required , Validators.minLength(5)]],
      password:['', [Validators.required]]
    });

  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.loginSuccess.emit(true);
    }
  }

}
