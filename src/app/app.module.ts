import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { AlertsComponent } from './alerts/alerts.component'
import { EventsComponent } from './events/events.component'
import { EnterTheMothershipComponent } from './enter-the-mothership/enter-the-mothership.component'
import { StoreComponent } from './store/store.component'
import { MusicComponent } from './music/music.component'
import { ElectronicPressKitComponent } from './electronic-press-kit/electronic-press-kit.component'
import { AboutComponent } from './about/about.component'
import { PhotosComponent } from './photos/photos.component'
import { RiseOfLocusComponent } from './rise-of-locus/rise-of-locus.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { VisualizerComponent } from './visualizer/visualizer.component'
import { FooterComponent } from './footer/footer.component'
import { BackgroundComponent } from './background/background.component'
import { CartComponent } from './cart/cart.component'
import { CryptoService } from './crypto/crypto.service'
import { BarsService } from './bars/bars.service'
import { AdsService } from './ads/ads.service'
import { BarsComponent } from './bars/bars.component'
import { LeftComponent } from './bars/left/left.component'
import { SettingsComponent } from './settings/settings.component'
import { SettingsService } from './settings/settings.service'
import { BackgroundService } from './background/background.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    BarsComponent,
    LeftComponent,
    EventsComponent,
    EnterTheMothershipComponent,
    SettingsComponent,
    StoreComponent,
    MusicComponent,
    ElectronicPressKitComponent,
    AboutComponent,
    PhotosComponent,
    RiseOfLocusComponent,
    NotFoundComponent,
    HomeComponent,
    ContactComponent,
    VisualizerComponent,
    FooterComponent,
    BackgroundComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LeafletModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AdsService,
    BarsService,
    CryptoService,
    SettingsService,
    BackgroundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
