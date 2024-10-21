import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ChronoPipe } from './pipes/chrono.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    ChronoPipe
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    NavbarComponent,
    ChronoPipe
  ]
})
export class SharedModule { }
