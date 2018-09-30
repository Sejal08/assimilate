import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Assimilate',
  templateUrl: './Assimilate.component.html',
  styleUrls: ['./Assimilate.component.css']
})
export class AssimilateComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  
  constructor() { }

  ngOnInit() {
    var btn = document.getElementsByClassName("navlink");
      for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
          var currents = document.getElementsByClassName("active");
            currents[0].className = currents[0].className.replace(" active", "");
            this.className += " active";
      });
    }

    var btns = document.getElementsByClassName("navlink1");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active1");
            current[0].className = current[0].className.replace(" active1", "");
            this.className += " active1";
      });
    }
  }

}
