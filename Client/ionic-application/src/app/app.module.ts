import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MasterViewComponent} from './master-view/master-view.component';
import {HeaderComponent} from './header/header.component';
import {DetailComponent} from './detail/detail.component';
import {DetailTabsComponent} from './detail/detail-tabs/detail-tabs.component';
import {DetailCardComponent} from './detail/detail-card/detail-card.component';
import {ContestServiceService} from './service/contest-service.service';
import {HttpClientModule} from '@angular/common/http';
import {AddContestComponent} from "./shared/add-contest/add-contest.component";


@NgModule({
  declarations: [AppComponent, MasterViewComponent, HeaderComponent, DetailComponent, DetailTabsComponent, DetailCardComponent, AddContestComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ContestServiceService  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
