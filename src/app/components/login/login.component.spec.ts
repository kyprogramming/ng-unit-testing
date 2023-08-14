import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports:  [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid when form is empty ', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should check validity for username', () => {
    const username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();

    username.setValue('kumar');
    expect(username.valid).toBeTruthy();

    username.setValue('kuma');
    expect(username.valid).toBeFalsy();

  });

  it('should check validity for password', () => {
    const password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('123456');
    expect(password.valid).toBeTruthy();

  });

  it('form should be valid if both fields are valid', () => {
    const username = component.loginForm.controls['username'];
    const password = component.loginForm.controls['password'];
    
    username.setValue('kumar');
    password.setValue('123456');

    expect(component.loginForm.valid).toBeTruthy();

  });

  it('form should emit login success on successful form submission', () => {
    spyOn(component.loginSuccess , 'emit')

    const username = component.loginForm.controls['username'];
    const password = component.loginForm.controls['password'];
    
    username.setValue('kumar');
    password.setValue('123456');
    component.onSubmit();
    
    expect(component.loginSuccess.emit).toHaveBeenCalledWith(true);

  });


  it('form should not emit login success on form invalid', () => {
    spyOn(component.loginSuccess , 'emit')

    const username = component.loginForm.controls['username'];
    const password = component.loginForm.controls['password'];
    
    username.setValue('kumar');
    password.setValue('');
    component.onSubmit();
    
    expect(component.loginSuccess.emit).not.toHaveBeenCalled();

  });


});
