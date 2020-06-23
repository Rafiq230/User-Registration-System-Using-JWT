import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/Entity/UserRegistration';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Shared/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  model: UserRegister;
  registrationForm: FormGroup;
  user: UserRegister;
  userSubmited: boolean;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(8),
    //   ]),
    //   confermPassword: new FormControl(null, Validators.required),
    //   mobile: new FormControl(null, [
    //     Validators.required,
    //     Validators.maxLength(10),
    //   ]),
    // }, this.passwordMatchingValidators);
    this.createRegistrationForm();
  }
  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [
        Validators.required,
        Validators.minLength(8),
      ]],
      confermPassword: [null, Validators.required],
      fullName: [null,
        Validators.required
        ],
    }, { validators: this.passwordMatchingValidators });
  }

  passwordMatchingValidators(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confermPassword').value ? null : { notmatched: true };
  }

  close() { }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmited = true;
    if (this.registrationForm.valid) {
       //this.user = Object.assign(this.user, this.registrationForm.value);
       const temp = Object.assign({}, this.userData())
       this.userService.addUser(temp).subscribe(
         (success => {
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          );
         }),
         (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          });
        }
       );
       this.registrationForm.reset();
       this.userSubmited = false;

    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      });
    }

  }
  userData(): UserRegister {
    return this.user = {
      UserName: this.userName.value,
      Email: this.email.value,
      Password: this.password.value,
      FullName: this.fullName.value,
    };
  }
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confermPassword() {
    return this.registrationForm.get('confermPassword') as FormControl;
  }
  get fullName() {
    return this.registrationForm.get('fullName') as FormControl;
  }
}
