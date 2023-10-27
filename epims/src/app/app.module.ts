import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './_shared/log-in/log-in.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TrailSelectionComponent } from './trail-selection/trail-selection.component';
import { TrailMapComponent } from './trail-map/trail-map.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';
import { PersonalJournalComponent } from './personal-journal/personal-journal.component';
import { PointOfInterestComponent } from './desktop/point-of-interest/point-of-interest.component';
import { RequestsComponent } from './desktop/requests/requests.component';
import { TrailsComponent } from './desktop/trails/trails.component';
import { MessagingComponent } from './phone/messaging/messaging.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeScreenComponent,
    TrailSelectionComponent,
    TrailMapComponent,
    EncyclopediaComponent,
    PersonalJournalComponent,
    PointOfInterestComponent,
    RequestsComponent,
    TrailsComponent,
    MessagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
