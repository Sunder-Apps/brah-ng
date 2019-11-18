import { Component, OnInit } from '@angular/core'
import { Playlist } from './playlist'
import { Video } from './video'

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.less']
})
export class VisualizerComponent implements OnInit {
  playlists:Playlist[] = [
    {
      name: '2D',
      url: 'https://www.youtube.com/playlist?list=PLHSK04x2gyOShbTgxOP4ieFBjD04KL0nn',
      background: 'https://i.imgur.com/trF3xoG.jpg',
      videos: [
        {
          src: 'https://www.youtube.com/embed/CEHM2tFNQVw',
          poster: 'https://i.imgur.com/trF3xoG.jpg'
        },
        {
          src: 'https://www.youtube.com/embed/FrXSu7RebKI',
          poster: 'https://i.imgur.com/l7ijX41.jpg'
        },
        {
          src: 'https://www.youtube.com/embed/BDt-mOmtv3k',
          poster: 'https://i.imgur.com/L2tFKN8.jpg'
        }
      ]
    },
    {
      name: '360°',
      url: 'https://www.youtube.com/playlist?list=PLHSK04x2gyOTyral2ZunzJuQKsonHvV2R',
      background: 'https://i.imgur.com/l7ijX41.jpg',
      videos: [
        {
          src: 'https://www.youtube.com/embed/o1ZwQtpi5Fg',
          poster: 'https://i.imgur.com/trF3xoG.jpg'
        },
        {
          src: 'https://www.youtube.com/embed/rr_zoSjqg_k',
          poster: 'https://i.imgur.com/l7ijX41.jpg'
        },
        {
          src: 'https://www.youtube.com/embed/0PoBGeGjpIc',
          poster: 'https://i.imgur.com/L2tFKN8.jpg'
        }
      ]
    }
  ]
  constructor() { }
  ngOnInit() { }
}
