import { Component, Input, OnInit, Output } from '@angular/core';
import { Tab } from 'src/app/interface/tab';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() public tabs: Tab[] = [];
  @Output() public changeTab = new EventEmitter<any>();

  public chageTabClick(tab: any): void {
    this.changeTab.emit(tab);
  }
}
