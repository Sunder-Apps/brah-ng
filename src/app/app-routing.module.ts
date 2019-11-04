import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ElectronicPressKitComponent } from './electronic-press-kit/electronic-press-kit.component';
import { EnterTheMothershipComponent } from './enter-the-mothership/enter-the-mothership.component';
import { StoreComponent } from './store/store.component';
import { PhotosComponent } from './photos/photos.component';
import { MusicComponent } from './music/music.component';
import { RiseOfLocusComponent } from './rise-of-locus/rise-of-locus.component';
import { CartComponent } from './cart/cart.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'electronic-press-kit',
    component: ElectronicPressKitComponent
  },
  {
    path: 'enter-the-mothership',
    component: EnterTheMothershipComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'rise-of-locus',
    component: RiseOfLocusComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'subscribe',
    component: HomeComponent
  },
  {
    path: 'visualizer',
    component: VisualizerComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
