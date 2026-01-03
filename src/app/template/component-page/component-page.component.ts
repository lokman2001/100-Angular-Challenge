import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { RibbonLocation } from 'src/app/component/ribbon/ribbon.location.enum';
import { RibbonType } from 'src/app/component/ribbon/ribbon.type';
import { Accordion } from 'src/app/interface/accordion';
import { Tab } from 'src/app/interface/tab';
import { UserData } from 'src/app/interface/user-data';
import { TabsService } from 'src/app/service/tabs.service';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss'],
})
export class ComponentPageComponent {
  public faInfo = faInfoCircle;
  public cardIconEnable = true;
  public updateSearchValue = '';
  public searchKeyDisplay = true;
  public data!: UserData[];
  public totalItems = 100;
  public currentPagingPage = 1;
  public tabs!: Tab[];
  public currentTab = 0;

  public changePagingPage(page: number) {
    this.currentPagingPage = page;
  }
  public debounceSearch(value: string) {
    this.updateSearchValue = value;
  }

  public changeTab(tab: any) {
    this.tabs.forEach((data, index) => {
      if (data === tab) {
        data.active = true;
        this.currentTab = index;
      } else {
        data.active = false;
      }
    });
  }
  public countries = [
    'Myanmar',
    'Thailand',
    'Singapore',
    'Japan',
    'United States',
  ];

  public items: Accordion[] = [
    {
      title: 'title1',
      content: 'this is content',
      isExpanded: false,
    },
    {
      title: 'title2',
      content: 'this is content',
      isExpanded: false,
    },
  ];

  public rLocation = RibbonLocation;
  public rType = RibbonType;
  public ribbonStyle = {
    type: this.rType.warning,
    location: this.rLocation.bottomLeft,
  };
  constructor(
    private userDataService: UserDataService,
    private tabsService: TabsService
  ) {}

  ngOnInit(): void {
    this.data = this.userDataService.getData;
    this.tabs = this.tabsService.getTabs;
  }
}
