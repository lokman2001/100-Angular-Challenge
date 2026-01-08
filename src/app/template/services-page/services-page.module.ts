import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page.component';

const route: Routes = [
  {
    path: '',
    component: ServicesPageComponent,
  },
  {
    path: ':id',
    component: ServicesPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class ServicesPageModule {}
