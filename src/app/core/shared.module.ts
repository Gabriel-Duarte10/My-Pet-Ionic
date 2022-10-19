import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const components = [];

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  IonicModule,
  //Angular Material
];

@NgModule({
  declarations: [
    ...components
  ],
  providers: [],
  entryComponents: [],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
  ],
})
export class CoreSharedModule { }
