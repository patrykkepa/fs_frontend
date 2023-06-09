import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFeatureComponent } from './example-feature.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleFeatureRoutingModule { }
