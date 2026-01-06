import { Component, EventEmitter, Input, OnInit ,Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent  {
  @Input () public isShow! : boolean;
  @Output() public hideOverlay = new EventEmitter<boolean>();

  public toggle(value : boolean):void{
    this.hideOverlay.emit(!value);
    console.log(value)
  }

}
