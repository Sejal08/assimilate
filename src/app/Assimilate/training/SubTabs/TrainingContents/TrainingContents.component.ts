import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TrainingContents',
  templateUrl: './TrainingContents.component.html',
  styleUrls: ['./TrainingContents.component.scss']
})
export class TrainingContentsComponent implements OnInit {

  collection = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  contents= [
    {id: 1, index:'First Session Contents', content: '1 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 2, index:'Second Session Contents', content: '2 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 3, index:'Third Session Contents', content: '3 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 4, index:'Fourth Session Contents', content: '4 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 5, index:'Fifth Session Contents', content: '5 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 6, index:'Sixth Session Contents', content: '6 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 7, index:'Seventh Session Contents', content: '7 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 8, index:'Eighth Session Contents', content: '8 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},
    {id: 9, index:'Nineth Session Contents', content: '9 Dummy Content: an editor button and system plugin (Joomla extension) that sets random dummy copy in articles or in other content item that have editors like custom HTML modules, category descriptions, or third party content.'},

  ]
  ngOnInit() {
  }

}
