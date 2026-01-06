import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss'],
})
export class DirectivesPageComponent {

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
