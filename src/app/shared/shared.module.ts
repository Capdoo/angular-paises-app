import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent  //Para poder usarlo en app-component
  ],
  imports: [
    CommonModule,
    // AppRoutingModule, //Primera solución
    RouterModule
  ]
})
export class SharedModule { }
