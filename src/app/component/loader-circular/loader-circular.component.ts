import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './loader-type.enum';

@Component({
  selector: 'app-loader-circular',
  templateUrl: './loader-circular.component.html',
  styleUrls: ['./loader-circular.component.scss'],
})
export class LoaderCircularComponent implements OnInit {
  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Loading;
  public LoaderType = LoaderType;

  public get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }

  private loading = 'Loading';
  private loadingPeriods = '.';
  constructor() {}

  ngOnInit(): void {
    if (this.loaderType === this.LoaderType.Loading) {
      this.updateLoadingPeriods();
    }
  }

  private updateLoadingPeriods() {
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..\0';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.\0\0';
          currentStep = 0;
          break;
      }
    }, 500);
  }
}
