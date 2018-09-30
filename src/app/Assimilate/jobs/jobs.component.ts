import { Component, OnInit } from '@angular/core';

export class FileUpload {
  key: string;
  name: string;
  url: string;
  file: File;

  constructor(file: File) {
      this.file = file;
  }
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;

  constructor() { }

  ngOnInit() {
  }

  training = [
    {name: "Dot Net"},
    {name: "PHP"},
    {name: "Angular"},
    {name: "Java"},
    {name: "Ionic"},
    {name: "Pyhon"},
    {name: "Android"}
  ];

  jobsdesp = [
    {job_title:"Job Description [PDF will display here]", desp: "DOT NET Programmer with experince of database or Linux, Computer Engineering graduate ludhiana resident. projects for Overseas Markets", job_type:"Full Time", salary:"₹3,00,000 to ₹ 4,00,000 /year", exp:"work 2 years (Preferred)", location:" Mumbai, Maharashtra (Preferred)"},    
    // {job_title:"Job Description [PDF will display here]", desp: "DOT NET Programmer with experince of database or Linux, Computer Engineering graduate ludhiana resident. projects for Overseas Markets", job_type:"Full Time", salary:"₹3,00,000 to ₹ 4,00,000 /year", exp:"work 2 years (Preferred)", location:" Mumbai, Maharashtra (Preferred)"},
  ];

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('pdf.*')) {
      this.selectedFiles = event.target.files;
      console.log("PDF Successfully Selected")

    } else {
      alert('invalid format!');
      console.log(alert)
    }
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    // this.uploadService.pushFileToStorage(this.currentFileUpload);
  };

}
