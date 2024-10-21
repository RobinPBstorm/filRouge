import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { Demo3Component } from './demo3/demo3.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    Demo3Component,
    CustomPipePipe
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DemoModule { }
