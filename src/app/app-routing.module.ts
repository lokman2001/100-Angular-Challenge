import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesPageComponent } from './template/pipes-page/pipes-page.component';
import { DirectivesPageComponent } from './template/directives-page/directives-page.component';
import { ServicesPageComponent } from './template/services-page/services-page.component';
import { OtherPageComponent } from './template/other-page/other-page.component';
import { ComponentPageComponent } from './template/component-page/component-page.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { path: 'components', component: ComponentPageComponent },
  { path: 'pipes', component: PipesPageComponent },
  { path: 'directives', component: DirectivesPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'other', component: OtherPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
