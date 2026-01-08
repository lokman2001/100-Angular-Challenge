import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesPageComponent } from './template/pipes-page/pipes-page.component';
import { DirectivesPageComponent } from './template/directives-page/directives-page.component';
import { ServicesPageComponent } from './template/services-page/services-page.component';
import { OtherPageComponent } from './template/other-page/other-page.component';
import { ComponentPageComponent } from './template/component-page/component-page.component';
import { FormDirtyGuard } from './other/guard/form-dirty.guard';
import { NotFoundComponent } from './component/not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { data: {title : "components"}, path: 'components', component: ComponentPageComponent },
  { data: {title : "pipes"}, path: 'pipes', component: PipesPageComponent },
  { data: {title : "directives"},path: 'directives', component: DirectivesPageComponent },
  { data: {title : "services"},path: 'services', component: ServicesPageComponent },
  {path: 'services/:id', component: ServicesPageComponent },
  { data: {title : "other"},
    path: 'other',
    component: OtherPageComponent,
    canDeactivate: [FormDirtyGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
