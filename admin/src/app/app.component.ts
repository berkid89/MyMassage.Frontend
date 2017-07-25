import { Component } from '@angular/core';
import { AuthGuard } from './services/authGuard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(public authGuard: AuthGuard) {

  }
}
