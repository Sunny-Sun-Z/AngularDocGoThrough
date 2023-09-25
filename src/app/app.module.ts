import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WhatisComponent } from './components/whatis/whatis.component';
import { SvgComponent } from './svg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { BigHeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component';
import { ClickDirective } from './click.directive';
import { SizerComponent } from './sizer.component';
import { heroSwitchComponents } from './hero-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    WhatisComponent,
    SvgComponent,
    HeroDetailComponent,
    BigHeroDetailComponent,
    HeroFormComponent,
    ClickDirective,
    SizerComponent,
    heroSwitchComponents,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }