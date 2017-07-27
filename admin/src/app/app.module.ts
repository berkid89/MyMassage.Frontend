import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { UserService } from './services/userService'
import { Config } from './services/config';
import { AuthGuard } from './services/authGuard';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetInTouch } from './getintouch/getintouch.component';
import { MassageServices } from './massageServices/massageServices.component';
import { SpecialOffer } from './specialoffer/specialoffer.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'getintouch', component: GetInTouch, canActivate: [AuthGuard] },
  { path: 'services', component: MassageServices, canActivate: [AuthGuard] },
    { path: 'specialoffer', component: SpecialOffer, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GetInTouch,
    MassageServices,
    SpecialOffer
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    FormsModule,
    BrowserAnimationsModule,
    ToasterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    FormBuilder,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    Config,
    AuthGuard,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
