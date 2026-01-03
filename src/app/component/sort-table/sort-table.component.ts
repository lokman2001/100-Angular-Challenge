import { UserDataService } from 'src/app/service/user-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
})
export class SortTableComponent {
  @Input() public data: any[] = [];

  public sortDirection = true;

  public sort(headerData: { key: string; value: any }): void {
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;
      case typeof value === 'number':
        this.sortNumber(key);
        break;
      case typeof value === 'string':
        this.sortString(key);
        break;
    }
  }
  private sortBoolean(key: string): void {
    this.data.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }
  private sortString(key: string): void {
    this.data.sort((value1: any, value2: any) => {
      const value1Uppercase = value1[key].toUpperCase();
      const value2Uppercase = value2[key].toUpperCase();

      if (this.sortDirection) {
        if (value1Uppercase > value2Uppercase) {
          return -1;
        }
        if (value2Uppercase > value1Uppercase) {
          return 1;
        }
        return 0;
      } else {
        if (value2Uppercase > value1Uppercase) {
          return -1;
        }
        if (value1Uppercase > value2Uppercase) {
          return 1;
        }
        return 0;
      }
    });
  }
  private sortNumber(key: string): void {
    this.data.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }
  constructor(private userData: UserDataService) {}

  ngOnInit() {
    this.data = this.userData.getData;
  }
}
