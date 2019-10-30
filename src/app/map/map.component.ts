import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="//www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> | <a href="//www.sunderapps.com" target="_blank">Sunder Applications</a>&nbsp;&nbsp;&nbsp;'
      })
    ],
    zoom: 12,
    center: latLng([ 40.44127234015373, -80.01284301280977 ])
  };

  constructor() { }

  ngOnInit() { }

}
