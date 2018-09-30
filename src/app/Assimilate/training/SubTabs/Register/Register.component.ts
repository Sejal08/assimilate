import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLinear = true;
  hidden:boolean = true;

  mobNo= new FormControl('', [Validators.required]);
  otp= new FormControl('', [Validators.required]);
  // firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    
    // this.verify= this._formBuilder.group({
    //   otp: ['', Validators.required]
    // })

    this.secondFormGroup = this._formBuilder.group({
      fname: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      address: ['', Validators.required],
      pin: ['', Validators.required],
      district: ['', Validators.required],
      uname: ['', Validators.required],
      pass: ['', Validators.required],
      cpass: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      trainingC: ['', Validators.required],
      durationC: ['', Validators.required],
      locationC: ['', Validators.required],
      ref: ['', Validators.required],
      refId:['', Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group({
      paymentC: ['', Validators.required],
      plocationC: ['', Validators.required],
      fees: ['', Validators.required],
      regFee:['', Validators.required]
    })
  }

  Training = [
    {name: 'Angular'},
    {name: 'Php'},
    {name: 'Dot Net'},
    {name: 'Python'},
  ];

  Duration= [
    {time: '1 months'},
    {time: '3 months'},
    {time: '6 months'},
  ]

  Location = [
    {name: 'Pune'},
    {name: 'Nashik'},
    {name: 'Banglore'},
    {name: 'Mumbai'},
  ];

  Payment = [
    {mode: 'Online'},
    {mode: 'Cash'}
  ];

  PLocation = [
    {name: 'Pune'},
    {name: 'Nashik'},
    {name: 'Banglore'},
    {name: 'Mumbai'},
  ];

  submit(){
    this.hidden = !this.hidden
  }
}
