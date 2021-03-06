import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CounterDataComponent } from './counter-data/counter-data.component';
import { ProfileComponent } from './profile/profile.component';
//import { NgxActionCableModule, NgxActionCableConfiguration } from 'ngx-actioncable';

/* export function getNgxActionCableConfig(): NgxActionCableConfiguration {
  let config = new NgxActionCableConfiguration('ws-id', 'wss://.../cable');
  config.addUrl('another-ws-id', 'wss://.../cable'); // optional
  return config;
} */

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavbarComponent,
    HomeComponent,
    CounterDataComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
//    NgxActionCableModule.forConfig(getNgxActionCableConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }