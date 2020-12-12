import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcumbsComponent } from './breadcrumbs/breadcumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [

    BreadcumbsComponent,
    SidebarComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [

    BreadcumbsComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
