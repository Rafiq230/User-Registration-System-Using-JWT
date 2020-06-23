import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserRegister } from 'src/app/Entity/UserRegistration';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:63638/api';
constructor(private http: HttpClient) { }

public addUser(userRegister: UserRegister) {
  return this.http.post(this.url + '/user/Register', userRegister);
}
public authUser(userRegister: UserRegister) {
  return this.http.post(this.url + '/user/Register', userRegister);
}

public loginUser(userRegister: UserRegister) {
  return this.http.post(this.url + '/user/login', userRegister);
}

 public getUserProfile() {
  const tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
  return this.http.get(this.url + '/UserProfile', { headers: tokenHeader });
}

//Using interceptor
// public getUserProfile() {
//   return this.http.get(this.url + '/UserProfile');
// }

}
