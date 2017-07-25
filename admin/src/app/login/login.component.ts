import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/userService';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public userName: string;
    public password: string;
    public errors: Array<any>;

    public constructor(private userService:UserService, private router: Router) {

    }

    public login(){
      this.userService.login(this.userName, this.password).then(res => {
        let result = res.json();
        if(result.errors)
          this.errors = result.errors;
        else {
          localStorage.setItem("token", result.data.token);
          this.router.navigate([""]);
        }
      });
    }
}
