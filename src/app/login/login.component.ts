import { Component } from '@angular/core';
import { UsersService } from "../users/users.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email!: string;
  password!: string;

  constructor(public userService: UsersService, private _location: Location) {}
  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data.token);
    });
  }
  
goBack(){
  this._location.back();
}

}
