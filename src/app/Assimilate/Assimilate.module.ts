import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AssimilateComponent } from './Assimilate.component';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { MaterialComponent } from './material/material.component'
import { ScheduleComponent } from "./schedule/schedule.component";
import { JobsComponent  } from "./jobs/jobs.component";
import { DownloadComponent  } from "./download/download.component";

import { DurationComponent } from "./training/SubTabs/Duration/Duration.component";
import { HowToJoinComponent } from "./training/SubTabs/HowToJoin/HowToJoin.component";
import { MakeInquiryComponent } from "./training/SubTabs/MakeInquiry/MakeInquiry.component";
import { Material1Component } from "./training/SubTabs/Material1/Material1.component";
import { RegisterComponent } from "./training/SubTabs/Register/Register.component";
import { TrainingContentsComponent } from "./training/SubTabs/TrainingContents/TrainingContents.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickModule } from 'ngx-slick';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

const routes: Routes = [
    {path: 'assimilate', component: AssimilateComponent,
    children: [
      {path: 'about', component: AboutComponent},
      {path: 'training', component: TrainingComponent,
      children: [
        { path: 'duration', component: DurationComponent },
        { path: 'howtojoin', component: HowToJoinComponent },
        { path: 'inquiry', component: MakeInquiryComponent },
        { path: 'material1', component: Material1Component },
        { path: 'register', component: RegisterComponent },
        { path: 'traningcontents', component: TrainingContentsComponent },
        ]
      },
      {path: 'material', component: MaterialComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'jobs', component: JobsComponent},
      {path: 'download', component: DownloadComponent},
    ]
  }
  ];

@NgModule({
   declarations: [
    AssimilateComponent,   
    AboutComponent,
    TrainingComponent,
    MaterialComponent,
    ScheduleComponent,
    JobsComponent,
    DownloadComponent,

    DurationComponent,
    HowToJoinComponent,
    MakeInquiryComponent,
    Material1Component,
    RegisterComponent,
    TrainingContentsComponent,
],
   imports: [
      BrowserModule,
      CommonModule,
      RouterModule.forChild(routes),
      BrowserAnimationsModule,
      SlickModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
   ],
   providers: [],
})

export class AssimilateModule { }
