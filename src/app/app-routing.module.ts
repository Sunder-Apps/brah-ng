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
//import { StoreComponent } from './store/store.component';
import { PhotosComponent } from './photos/photos.component';
import { MusicComponent } from './music/music.component';
import { RiseOfLocusComponent } from './rise-of-locus/rise-of-locus.component';
import { CartComponent } from './cart/cart.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AppsComponent } from './apps/apps.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'home'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: 'about'
    }
  },
  {
    path: 'app',
    component: AppsComponent,
    data: {
      animation: 'apps'
    }
  },
  {
    path: 'apps',
    component: AppsComponent,
    data: {
      animation: 'apps'
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      animation: 'cart'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      animation: 'contact'
    }
  },
  {
    path: 'electronic-press-kit',
    component: ElectronicPressKitComponent,
    data: {
      animation: 'electronic-press-kit'
    }
  },
  {
    path: 'enter-the-mothership',
    component: EnterTheMothershipComponent,
    data: {
      animation: 'enter-the-mothership'
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      animation: 'events'
    }
  },
  {
    path: 'music',
    component: MusicComponent,
    data: {
      animation: 'music'
    }
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
    path: 'subscribe',
    component: SubscribeComponent
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
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }