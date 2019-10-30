import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  query:string = '';
  
  constructor() { }
  ngOnInit() { }

  search (event:Event) {
    alert(this.query);
  }

  clearSearch () {
    this.query = '';
  }
}
