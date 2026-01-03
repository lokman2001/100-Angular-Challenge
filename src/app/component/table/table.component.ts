import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { UserData } from 'src/app/interface/user-data';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() public data: UserData[] = [];
  @Output() public headerSelect = new EventEmitter<{
    key: string;
    value: any;
  }>();
  public icon = faChevronDown;

  public headerSelection(key: string, value: any) {
    this.headerSelect.emit({ key, value });
  }
  constructor(public userData: UserDataService) {}
  ngOnInit() {}
}
