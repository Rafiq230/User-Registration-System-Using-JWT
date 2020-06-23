import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Shared/Services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { UserRegister } from 'src/app/Entity/UserRegistration';
import { UserLogin } from 'src/app/Entity/login';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
public model: UserLogin;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    // if (localStorage.getItem('token') != null) {
    //   this.router.navigateByUrl('home');
    // }
    this.model = new UserLogin();
  }
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    this.userService.loginUser(loginForm.value).subscribe(
      (success: any) => {
        localStorage.setItem('token', success.token);
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        );
        this.router.navigateByUrl('/home');
      },
      err =>{

        if (err.status === 400){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          });
        }

      }
    );
  }
}
