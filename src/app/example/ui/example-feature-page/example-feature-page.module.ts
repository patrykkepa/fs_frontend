import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleFeaturePageComponent } from './example-feature-page.component';



@NgModule({
  declarations: [
    ExampleFeaturePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleFeaturePageComponent
  ]
})
export class ExampleFeaturePageModule { }
