import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
    public faInfo = faInfoCircle;
    public cardIconEnable = true;
  constructor(public snackbarService : SnackbarService) { }

  ngOnInit(): void {
  }

  public showSnackbar():void{
    this.snackbarService.callSnackbar("example")
  }

}
