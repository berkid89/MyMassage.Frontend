import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private translate: TranslateService;

  public year: number = new Date().getFullYear();
  public introText: string;

  constructor(translate: TranslateService) {
    this.translate = translate;
    this.setLang('hu');
  }

  setLang(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
