import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {AlertController, IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MasterViewComponent} from './master-view/master-view.component';
import {HeaderComponent} from './header/header.component';
import {DetailComponent} from './detail/detail.component';
import {DetailTabsComponent} from './detail/detail-tabs/detail-tabs.component';
import {DetailCardComponent} from './detail/detail-card/detail-card.component';
import {ContestServiceService} from './service/contest-service.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AddContestComponent} from './shared/add-contest/add-contest.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthInterceptor} from './service/interceptor/AuthInterceptor';
import {AuthGuard} from './service/guard/auth.guard';
import {AutoLoginGuard} from './service/guard/auto-login.guard';
import {NgxPaginationModule} from 'ngx-pagination';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [AppComponent, MasterViewComponent,
    HeaderComponent, DetailComponent, DetailTabsComponent,
    DetailCardComponent, AddContestComponent, LoginComponent, RegisterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCu_2HJMBOVXBl9pY_yC-nKdyijbpC1Sm8'
  }),
    HttpClientModule, NgxPaginationModule],
  providers: [{ provide : RouteReuseStrategy, useClass: IonicRouteStrategy },
    ContestServiceService, AutoLoginGuard, AuthGuard, AlertController,
    {
      provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
