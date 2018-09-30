import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-HowToJoin',
  templateUrl: './HowToJoin.component.html',
  styleUrls: ['./HowToJoin.component.scss']
})
export class HowToJoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  contents= [
    {id: 1, index:'Create Account', content: '1 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 2, index:'Verify Your Identity', content: '2 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 3, index:'Select Training', content: '3 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 4, index:'Make Payment', content: '4 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 5, index:'Enjoy Services', content: '4 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},

  ]
}