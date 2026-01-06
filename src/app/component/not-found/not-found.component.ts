import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSadCry } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  public cryIcon = faSadCry;
  public redirectCount = 10;

  constructor(public router: Router) {}
  public get message(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting ...';
    }
    return `Redirect you to home page in ${this.redirectCount}`;
  }

  ngOnInit() {
    setInterval(() => {
      this.redirectCount--;
      if (this.redirectCount <= -1) {
        this.router.navigate(['']);
      }
    }, 1000);
  }
  ngOnDestory() {
    clearInterval;
  }
}
