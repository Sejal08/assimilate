import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Material1',
  templateUrl: './Material1.component.html',
  styleUrls: ['./Material1.component.scss']
})
export class Material1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  contents= [
    {id: 1, index:'Theory Assignments', content: '1 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 2, index:'Practical Assignments', content: '2 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 3, index:'Reference Contents', content: '3 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 4, index:'Placements Available', content: '4 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    
  ]
}
