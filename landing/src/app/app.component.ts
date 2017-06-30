import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpecialOffer } from './models/special-offer';
import { Http } from '@angular/http';
import { GetInTouch } from './models/get-in-touch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public settings: any;
  public year: number = new Date().getFullYear();
  public emailAddressForSubscribe: string;
  public specialOffer: SpecialOffer;
  public getInTouch: GetInTouch;

  constructor(private translate: TranslateService, private http: Http) {
    this.setLang('hu');
    this.initSettings();
    this.initSpecialOffer();
    this.initGetInTouch();
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

  initGetInTouch() {
    let git = new GetInTouch();
    git.address = "Károly krt. 3/a. Fél emelet 13. (33-as kapucsengő)";
    git.city = "Budapest 1075";
    git.country = "Magyarország";
    git.phoneNumber = "+36/30-916-1147";
    git.email = "masszazsterapia.eletmod@gmail.com";

    this.getInTouch = git;
  }
}
