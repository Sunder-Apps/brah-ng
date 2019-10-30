import { Component, OnInit } from '@angular/core';

declare let UnityLoader:any;
declare let UnityProgress:any;

@Component({
  selector: 'app-enter-the-mothership',
  templateUrl: './enter-the-mothership.component.html',
  styleUrls: ['./enter-the-mothership.component.less']
})
export class EnterTheMothershipComponent implements OnInit {
  id = 'enter-the-mothership'
  version = '1.10'
  instance:any
  constructor() { }

  ngOnInit() {
    this.instance = UnityLoader.instantiate(this.id, '/assets/unityweb/' + this.id + '/Build/EnterTheMothership' + this.version + '.json', { onProgress: UnityProgress })
  }

  setFullScreen() {
    if (this.instance) {
      this.instance.SetFullScreen(1);
    }
  }
}
