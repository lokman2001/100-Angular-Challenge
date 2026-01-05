import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-botton-sheet',
  templateUrl: './botton-sheet.component.html',
  styleUrls: ['./botton-sheet.component.scss']
})
export class BottonSheetComponent {
  public isClose = true;
  public closeIcon = faTimes

  public hide() {
    this.isClose = true;
  }
  public show(): void {
    this.isClose = false;
  }
}