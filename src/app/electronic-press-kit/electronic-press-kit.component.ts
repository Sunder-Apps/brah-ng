import { Component, OnInit } from '@angular/core';
import { Epk } from './epk';
import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-electronic-press-kit',
  templateUrl: './electronic-press-kit.component.html',
  styleUrls: ['./electronic-press-kit.component.less']
})
export class ElectronicPressKitComponent implements OnInit {
  bioImage = 'https://i.imgur.com/hQvXXcn.jpg'
  epk:Epk = {
    "bio": "Brahctopus is a jam-rock collective playing originals and covers across many genres. Their debut album, Mothership, was released in February 2019. The album release took place at the Buhl Planetarium of the Carnegie Science Center in Pittsburgh, PA with a live performance and accompanying laser show. Tickets to this event sold out in 56 minutes. Since, the band has released 4 singles and are currently working on a concept album to be released early 2020. Brahctopus also hosts a small festival in Sandy Lake, PA with about 500 attendees and some of Pittsburgh and the regions best up and coming acts. This helps continue to build outstanding relationships with many groups, organizations and fans throughout the region.",
    "year2019": [
      "Released 1 album and 4 singles to major streaming outlets.",
      "Sold out the Buhl Planetarium laser show performance in less than an hour.",
      "Nominated for Pittsburgh’s Best Pop/Rock Band of 2019.",
      "Performed live on 102.5 WDVE, Pittsburgh’s premiere classic rock station and iHeart Radio affiliate.",
      "Featured in the Pittsburgh Post Gazette for the album, Mothership.",
      "Featured in the Pittsburgh City Paper for the album, Mothership, and single, Dream Lights."
    ],
    "bands": [
      "George Clinton and Parliament Funkadelic",
      "Keller Williams",
      "Dawes",
      "Litz",
      "Ripe",
      "Bumpin Uglies (x4)",
      "Tropidelic",
      "Vibe and Direct",
      "G-Nome Project",
      "Giant Panda Guerilla Dub Squad (x2)",
      "The Movement (x2)",
      "Peoples Blues of Richmond",
      "Root Shock",
      "DJ Logic with Mononeon",
      "The Commonheart",
      "Band of Tomorrow",
      "Treehouse",
      "Pasadena",
      "Roots of a Rebellion",
      "Oogee Wawa",
      "Electric Love Machine",
      "Higher Education",
      "Chalk Dinosaur"
    ],
    "festivals": [
      "Three Rivers Arts Festival",
      "PA Cannabis Festival",
      "Farm Jammalamma",
      "Weekend at Wolfies",
      "Frozen Harbor Music Festival (x3)",
      "KayaFest",
      "Gotta Fest",
      "GareFest (x5)",
      "Larrypalooza",
      "Deutschtown Music Festival (x3)",
      "Millvale Music Festival",
      "Funky Fest (x2)",
      "Raggoo Festivoo (x2)",
      "Rhythm and Brews",
      "All-Scene Entertainment Fest (x2)"
    ],
    "links": [
      {
          "name": "Facebook",
          "icon": "fab fa-facebook",
          "url": "https://m.facebook.com/brahctopusband"
      },
      {
          "name": "Instagram",
          "icon": "fab fa-instagram",
          "url": "https://www.instagram.com/brahctopus/"
      },
      {
          "name": "YouTube",
          "icon": "fab fa-youtube",
          "url": "https://www.youtube.com/channel/UCglNtV-triaAWfgVltKOfYw"
      },
      {
        "name": "Apple Music",
        "icon": "fab fa-itunes-note",
        "url": "https://geo.itunes.apple.com/us/album/mothership/1450453947?uo=4&app=music&ls=1&at=1000lHKX"
      },
      {
        "name": "Spotify",
        "icon": "fab fa-spotify",
        "url": "https://open.spotify.com/artist/1RHs6O75lPt1jpcBKPGw0u?si=h6QFbvxST4SjlALVDzqN2Q"
      },
      {
        "name": "Google Play Music",
        "icon": "fab fa-google-play",
        "url": "https://play.google.com/music/m/Bwva5lw7shol2cvkgf63yli24le?signup_if_needed=1"
      },
      {
        "name": "Amazon Music",
        "icon": "fab fa-amazon",
        "url": "https://music.amazon.com/albums/B07N289L4D?do=play",
      },
      {
        "name": "Napster",
        "icon": "fab fa-napster",
        "url": "https://napster.com/artist/art.348960426/album/alb.348960429"
      },
      {
          "name": "Live Video",
          "icon": "fab fa-youtube",
          "url": "https://youtu.be/7wP67PBuH8Y"
      },
      {
          "name": "Amateur Video",
          "icon": "fab fa-youtube",
          "url": "https://youtu.be/mPrZJ_lSaqc"
      },
      {
        "name": "Audio Visualizers",
        "icon": "fab fa-youtube",
        "url": "https://www.youtube.com/playlist?list=PLHSK04x2gyOShbTgxOP4ieFBjD04KL0nn"
      },
      {
        "name": "VR Audio Visualizers",
        "icon": "fab fa-youtube",
        "url": "https://www.youtube.com/playlist?list=PLHSK04x2gyOTyral2ZunzJuQKsonHvV2R"
      },
      {
        "name": "GareFest 2019 Photos",
        "icon": "fab fa-facebook",
        "url": "https://www.facebook.com/pg/krysonphoto/photos/?tab=album&album_id=920952498253654"
      }
    ],
    "press": [
      {
          "name": "Pittsburgh Post-Gazette",
          "image": "https://i.imgur.com/hqE9i5Y.png",
          "url": "https://www.post-gazette.com/ae/music/2019/03/04/Brahctopus-Mothership-Pittsburgh-laster-Jaggerz-Jimmie-Ross-Jordan-York-Blue-Collar/stories/201903040083"
      },
      {
          "name": "Pittsburgh City Paper",
          "image": "https://i.imgur.com/xdsOtyV.jpg",
          "url": "https://www.pghcitypaper.com/pittsburgh/three-years-since-its-inception-brahctopus-finally-touches-down-with-its-debut-album-mothership/Content?oid=13959957"
      }
    ]
  }
  constructor(private settingsService:SettingsService) { }

  ngOnInit() {
    this.settingsService.settings.subscribe(settings => {
      if (settings) {
        if (settings.theme == 1) {
          this.bioImage = 'https://i.imgur.com/F5HQWyo.jpg'
        } else {
          this.bioImage = 'https://i.imgur.com/hQvXXcn.jpg'
        }
      }
    })
    this.settingsService.update()
  }
}
