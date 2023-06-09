import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleFeatureRoutingModule } from './example-feature-routing.module';
import { ExampleFeaturePageModule } from '../../ui/example-feature-page/example-feature-page.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { ExampleFeatureComponent } from './example-feature.component';


@NgModule({
  declarations: [
    ExampleFeatureComponent
  ],
  imports: [
    CommonModule,
    ExampleFeatureRoutingModule,
    ExampleFeaturePageModule,
    MenuModule
  ]
})
export class ExampleFeatureModule { }
