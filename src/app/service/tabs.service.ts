import { Injectable } from '@angular/core';
import { Tab } from '../interface/tab';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  public tabs: Tab[] = [
    {
      title: 'Tab One',
      active: true,
    },
    {
      title: 'Tab Two',
      active: false,
    },
  ];
  public get getTabs(): Tab[] {
    return this.tabs;
  }
}
