import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpecialOffer } from './models/special-offer';
import { Http } from '@angular/http';
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
    this.initServices();
    this.initSpecialOffer();
    this.initGetInTouch();
  }

  setLang(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  subscribe() {
    if (this.subscription.email) {
      this.subscription = new Subscription();
      this.translate.get("Thank You! We'll get in touch with you soon.").subscribe(res => this.toasterService.pop('success', '', res));
    }
  }

  wantSpecialOffer() {
    this.translate.get("AcceptOffer").subscribe(res => this.contact.message = res);
  }

  onContactSubmit() {
    this.contact = new Contact();
    this.contact.submitted = true;
    this.translate.get("Thank You! We'll get in touch with you soon.").subscribe(res => this.toasterService.pop('success', '', res));
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

  initServices() {
    this.services = new Array<Service>();
    let s1 = new Service();
    s1.name = "Sportmasszázs";
    s1.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristiqumsan.";
    s1.textList = ["1", "2", "3", "4"];
    let si1 = new ServiceItem();
    si1.price = 4000;
    si1.minute = 30;
    s1.items.push(si1);
    let si2 = new ServiceItem();
    si2.price = 7000;
    si2.minute = 60;
    s1.items.push(si2);
    this.services.push(s1);

    let s2 = new Service();
    s2.name = "Valami";
    s2.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida velit quis dolor tristiqumsan.";
    s2.textList = ["5", "6", "7", "8"];
    let si3 = new ServiceItem();
    si3.price = 4000;
    si3.minute = 30;
    s2.items.push(si3);
    let si4 = new ServiceItem();
    si4.price = 7000;
    si4.minute = 60;
    s2.items.push(si4);
    this.services.push(s2);
  }
}
