import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/other/animation/fade-in-out';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.scss'],
  animations: [fadeInOut] 
})
export class OtherPageComponent {
  public faInfo = faInfoCircle;
    public cardIconEnable = true;
  public showBox = false;
}
