import { Component, Input, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  @Input() public message: string = '';
  public isShow: boolean = false;

  constructor(public snackbarService: SnackbarService) {}
  ngOnInit(): void {
    this.snackbarService.snackbar$.subscribe((value) => {
      this.show(value);
    });
  }
  public show(value: string): void {
    this.isShow = true;
    this.message = value;

    const subscription = of(null)
      .pipe(delay(2900))
      .subscribe({
        complete: () => {
          this.isShow = false;
          subscription.unsubscribe;
        },
      });
  }
}
