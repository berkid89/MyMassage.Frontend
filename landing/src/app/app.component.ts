import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpecialOffer } from './models/special-offer';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public settings: any;
  public year: number = new Date().getFullYear();
  public emailAddressForSubscribe: string;
  public specialOffer: SpecialOffer

  constructor(private translate: TranslateService, private http: Http) {
    this.setLang('hu');
    this.initSettings();
    this.initSpecialOffer();
  }

  setLang(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  subscribe() {
    console.log(this.emailAddressForSubscribe);
  }

  initSpecialOffer() {
    let so = new SpecialOffer();
    so.hasSpecialOffer = true;
    so.percent = 50;
    so.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristiqumsan."

    this.specialOffer = so;
  }

  initSettings() {
    this.http.get('/assets/settings.json')
      .subscribe(res => this.settings = res.json());
  }
}
