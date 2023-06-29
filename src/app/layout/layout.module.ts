import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { ContentModule } from './content/content.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    ContentModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    SideBarComponent
  ]
})
export class LayoutModule { }
