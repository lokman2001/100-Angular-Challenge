import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OtherPageComponent } from 'src/app/template/other-page/other-page.component';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<OtherPageComponent> {
  public canDeactivate(component: OtherPageComponent):boolean {
    if(component.form.dirty){
      return confirm("Your form is dirty, Are you sure to leave?")
    }
    return true;
  }
    
  }
  

