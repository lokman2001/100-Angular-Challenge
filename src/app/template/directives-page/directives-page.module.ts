import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesPageComponent } from './directives-page.component';

const route: Routes = [{ path: '', component: DirectivesPageComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class DirectivesPageModule {}
