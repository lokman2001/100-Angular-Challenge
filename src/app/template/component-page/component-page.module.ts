import { ComponentPageComponent } from './component-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
const route: Routes = [
  {
    path: '',
    component: ComponentPageComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class ComponentPageModule {}
