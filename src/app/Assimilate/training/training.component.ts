import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  navLinks = [
    { path: 'dotnet', label: 'DOT NET' },
    // { path: 'angular', label: 'ANGULAR' },
    // { path: 'ionic', label: 'IONIC' },
    // { path: 'java', label: 'JAVA' },
    // { path: 'php', label: 'PHP' },
    // { path: 'python', label: 'PYTHON' },
  ]

  tabs = [
    {label: 'DOT NET', content: 'DOT NET'},
    {label: 'ANGULAR', content: 'ANGULAR'},
    {label: 'IONIC', content: 'IONIC'},
  ]

  navLinks1 = [
    { path: 'traningcontents', label: 'Contents Of Training' },
    { path: 'duration', label: 'Duration' },
    { path: 'material1', label: 'Material' },
    { path: 'howtojoin', label: 'How to Join' },
    { path: 'inquiry', label: 'Make Enquiry' },
    { path: 'register', label: 'Register' },

  ]
  selected = new FormControl(0);

  ngOnInit() {
  }

}
