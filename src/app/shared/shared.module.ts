import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ChronoPipe } from './pipes/chrono.pipe';
import { SoundDirective } from './directives/sound.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    ChronoPipe,
    SoundDirective
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    NavbarComponent,
    ChronoPipe,
    SoundDirective
  ]
})
export class SharedModule { }
