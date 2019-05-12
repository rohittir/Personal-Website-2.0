import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ServerConfigService } from './services/server-config.service';
import { JSONDataService } from './services/json-data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileDetailsComponent } from './profile-page/profile-details/profile-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CricketModule } from './cricket-view';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TimelinePageComponent,
    SearchPageComponent,
    ProfilePageComponent,
    ProfileDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    // CricketModule
  ],
  providers: [
    JSONDataService,
    ServerConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
