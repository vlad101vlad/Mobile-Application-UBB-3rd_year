import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MasterViewComponent} from './master-view/master-view.component';
import {HeaderComponent} from './header/header.component';
import {DetailComponent} from "./detail/detail.component";
import {DetailTabsComponent} from "./detail/detail-tabs/detail-tabs.component";
import {DetailCardComponent} from "./detail/detail-card/detail-card.component";

@NgModule({
    declarations: [AppComponent, MasterViewComponent, HeaderComponent, DetailComponent, DetailTabsComponent, DetailCardComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
