import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EnterTheMothershipComponent } from './enter-the-mothership/enter-the-mothership.component';
import { StoreComponent } from './store/store.component';
import { MusicComponent } from './music/music.component';
import { ElectronicPressKitComponent } from './electronic-press-kit/electronic-press-kit.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { RiseOfLocusComponent } from './rise-of-locus/rise-of-locus.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EnterTheMothershipComponent,
    StoreComponent,
    MusicComponent,
    ElectronicPressKitComponent,
    AboutComponent,
    PhotosComponent,
    RiseOfLocusComponent,
    SettingsComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    ContactComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
