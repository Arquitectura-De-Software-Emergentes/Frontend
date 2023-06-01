import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { UiModule } from '../UI/ui.module';
import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule, UiModule, PublicRoutingModule
  ]
})
export class PublicModule { }
