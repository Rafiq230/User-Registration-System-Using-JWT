import { UserService } from 'src/app/Shared/Services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser: any;
  userDetails: any;
  constructor(private route: Router, private service: UserService) { }

  ngOnInit() {
  }
  loggedIn(){
    this.loggedinUser = localStorage.getItem('token');
    //this.service.getUserProfile().subscribe();
    //this.loggedinUser
    // this.service.getUserProfile().subscribe(
    //   res => {
    //     this.loggedinUser = res;
    //   },
    //   err => {
    //     console.log(err);
    //   },
    // );
    return this.loggedinUser;
 }

 logOut(){
 localStorage.removeItem('token');
 this.route.navigateByUrl('user/login');
 Swal.fire({
   position: 'top-end',
   icon: 'success',
   title: 'Your are logged out',
   showConfirmButton: false,
   timer: 1500
 });
 }
}
