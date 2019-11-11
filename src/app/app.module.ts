import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { AppRoutingModule } from './app-routing.module'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatChipsModule } from '@angular/material/chips'
import { MatListModule } from '@angular/material/list'

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
import { ContactService } from './contact/contact.service'
import { SubscribeService } from './subscribe/subscribe.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscribeComponent } from './subscribe/subscribe.component'

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
    SubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatListModule
  ],
  providers: [
    AdsService,
    BarsService,
    CryptoService,
    SettingsService,
    BackgroundService,
    ContactService,
    SubscribeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
