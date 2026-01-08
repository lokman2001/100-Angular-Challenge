import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from './interface/accordion';
import { TitleService } from './service/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = '100 Angular Challenge'
  constructor(public titleService : TitleService){

  }

  ngOnInit(): void {
    this.titleService.initializeTitleService()
  }
  
}
