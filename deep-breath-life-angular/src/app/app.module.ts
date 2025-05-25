import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { JourneyPathsComponent } from './journey-paths/journey-paths.component';
import { MainCTAComponent } from './main-cta/main-cta.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { FreeRoutineFormComponent } from './free-routine-form/free-routine-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    JourneyPathsComponent,
    MainCTAComponent,
    UpcomingEventsComponent,
    FreeRoutineFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
