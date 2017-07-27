import { Component } from '@angular/core';
import { AuthGuard } from './services/authGuard';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(public authGuard: AuthGuard, private translate: TranslateService) {
    this.setLang('hu');
  }

  setLang(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
