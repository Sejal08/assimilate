import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-MakeInquiry',
  templateUrl: './MakeInquiry.component.html',
  styleUrls: ['./MakeInquiry.component.scss']
})
export class MakeInquiryComponent implements OnInit {
  fGroup: FormGroup;

  constructor(private fBuilder: FormBuilder) {
    this.fGroup = fBuilder.group({
      email: ['', Validators.email],
      name: ['', Validators.email],
      message: ['', Validators.email]
    });
  }
  ngOnInit() {
  }

}
