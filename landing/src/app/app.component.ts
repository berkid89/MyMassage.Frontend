import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpecialOffer } from './models/special-offer';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GetInTouch } from './models/get-in-touch';
import { Contact, Subscription } from './models/contact';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { Service, ServiceItem } from './models/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public settings: any;
  public year: number = new Date().getFullYear();
  public subscription: Subscription = new Subscription();
  public specialOffer: SpecialOffer;
  public getInTouch: GetInTouch;
  public contact: Contact = new Contact();
  public toasterconfig: ToasterConfig = new ToasterConfig({ timeout: 800000, messageClass: "toaster-msg" });
  public services: Array<Service>;

  constructor(private translate: TranslateService, private http: Http, private toasterService: ToasterService) {
    this.setLang('hu');
    this.initSettings();
  }

  setLang(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  wantSpecialOffer() {
    this.translate.get("AcceptOffer").subscribe(res => this.contact.message = res);
  }

  onContactSubmit() {
    this.http.post(this.settings.endpoints.api + this.settings.endpoints.contact, this.contact).subscribe(res => {
      this.contact = new Contact();
      this.contact.submitted = true;
      this.translate.get("Thank You! We'll get in touch with you soon.").subscribe(res => this.toasterService.pop('success', '', res));
    });
  }

  initSpecialOffer(settings: any) {
    this.http.get(settings.endpoints.api + settings.endpoints.offer).subscribe(res => {
      this.specialOffer = res.json().data;
    });
  }

  initSettings() {
    this.http.get('/assets/settings.json')
      .subscribe(res => {
        this.settings = res.json();
        this.initSpecialOffer(this.settings);
        this.initGetInTouch(this.settings);
        this.initServices(this.settings);
      });
  }

  initGetInTouch(settings: any) {
    this.http.get(settings.endpoints.api + settings.endpoints.getintouch).subscribe(res => {
      this.getInTouch = res.json().data;
    });
  }

  initServices(settings: any) {
    this.http.get(settings.endpoints.api + settings.endpoints.services).subscribe(res => {
      let result = res.json().data;
      if (result)
        this.services = result;
    });
  }
}
