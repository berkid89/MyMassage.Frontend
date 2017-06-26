import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public year: number = new Date().getFullYear();

  constructor(translate: TranslateService) {
        translate.setDefaultLang('hu');
        translate.use('hu');
  }
}
