import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // download(){
  //     // var txt;
  //     var r = confirm("Do You want to download app..?");
  //     if (r == true) {
  //         console.log("You pressed OK!");
  //     } else {
  //       console.log("You pressed cancel!");
  //     }
  //     // document.getElementById("demo").innerHTML = txt;
  //   }

}
