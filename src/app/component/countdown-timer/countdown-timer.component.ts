import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent {
  private intervalId: any;
  private countDownTime!: number;
  private timerNumeric = {
    miliSec: 1000,
    sec: 60,
    min: 60,
    hour: 24,
  };
  @Input() set countdown(value: number) {
    this.countDownTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
  }

  get sec(): string {
    const { miliSec, sec } = this.timerNumeric;
    const secValue = Math.floor(
      (this.getTimeDifference() % (miliSec * sec)) / miliSec
    );
    return this.timeFormat(secValue);
  }
  get min(): string {
    const { miliSec, sec, min } = this.timerNumeric;
    const minValue = Math.floor(
      (this.getTimeDifference() % (miliSec * sec * min)) / (miliSec * sec)
    );
    return this.timeFormat(minValue);
  }
  get hour(): string {
    const { miliSec, sec, min, hour } = this.timerNumeric;
    const hourValue = Math.floor(
      (this.getTimeDifference() % (miliSec * sec * min * hour)) /
        (miliSec * sec * min)
    );
    return this.timeFormat(hourValue);
  }
  get days(): string {
    const { miliSec, sec, min, hour } = this.timerNumeric;
    const daysValue = Math.floor(
      this.getTimeDifference() / (miliSec * sec * min * hour)
    );
    return this.timeFormat(daysValue);
  }

  private getTimeDifference(): number {
    const currentTime = new Date().getTime();
    return this.countDownTime - currentTime;
  }

  private timeFormat(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {}, 1000);
  }

  ngOnDestory() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
