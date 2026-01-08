import { Component } from '@angular/core';
import { faCopy, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss'],
})
export class DirectivesPageComponent {
  public copyIcon = faCopy
  constructor(public snackbarService : SnackbarService){}

  public debounceClickEvent = '';
  public faInfo = faInfoCircle;
  public cardIconEnable = true;

  public log() {
    this.debounceClickEvent += '-click-';
  }
  public reset() {
    this.debounceClickEvent = '';
  }
  public callSnackbar(value: string){
    this.snackbarService.callSnackbar(value)
  }
}
