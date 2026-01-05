import { Component, Input, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';
import { fadeInOut } from 'src/app/other/animation/fade-in-out';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [fadeInOut]
})
export class PopupComponent {
 @Input() public message!: string;
 public isShow = false;

 public show() {
  this.isShow = true;
  const subscription = of(null).pipe(delay(3000)).subscribe( {
    complete: () => {
      this.isShow = false;
      subscription.unsubscribe();
    }
 })
};
}
