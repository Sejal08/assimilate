import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AssimilateModule } from './Assimilate/Assimilate.module';

import { SlickModule } from 'ngx-slick';
// import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
    {path:'', redirectTo:'/assimilate/about', pathMatch:'full'},
    {path:'assimilate', loadChildren:'./Assimilate/Assimilate.module#AssimilateModule'},
  ];

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      AssimilateModule,
      SlickModule.forRoot(),
      // FlexLayoutModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
