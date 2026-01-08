import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPageComponent } from './pipes-page.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: PipesPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class PipesPageModule {}
