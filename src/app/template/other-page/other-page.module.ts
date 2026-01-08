import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherPageComponent } from './other-page.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FormDirtyGuard } from 'src/app/other/guard/form-dirty.guard';

const route: Routes = [
  { path: '', component: OtherPageComponent, canDeactivate: [FormDirtyGuard] },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class OtherPageModule {}
