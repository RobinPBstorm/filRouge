import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';

const routes: Routes = [
  // redirection
  { path: '', redirectTo: 'demo1', pathMatch: 'full'  },
  // appel directe de composant
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }