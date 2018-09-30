import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Duration',
  templateUrl: './Duration.component.html',
  styleUrls: ['./Duration.component.scss']
})
export class DurationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contents= [
    {id: 1, index:'Short Term Training', content: '1 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 2, index:'Middle Term Training', content: '2 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 3, index:'Long Term Training', content: '3 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},

  ]
}
