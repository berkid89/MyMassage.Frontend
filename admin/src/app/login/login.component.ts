import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public userName: string;
    public password: string;
}