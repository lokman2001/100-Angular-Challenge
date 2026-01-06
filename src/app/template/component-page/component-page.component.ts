import { SnackbarComponent } from './../../component/snackbar/snackbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faInfoCircle, faTag } from '@fortawesome/free-solid-svg-icons';
import { RibbonLocation } from 'src/app/component/ribbon/ribbon.location.enum';
import { RibbonType } from 'src/app/component/ribbon/ribbon.type';
import { Accordion } from 'src/app/interface/accordion';
import { Tab } from 'src/app/interface/tab';
import { UserData } from 'src/app/interface/user-data';
import { ButtonMeta } from 'src/app/model/button-meta.model';
import { TabsService } from 'src/app/service/tabs.service';
import { UserDataService } from 'src/app/service/user-data.service';
import { BottonSheetComponent } from 'src/app/component/botton-sheet/botton-sheet.component';
import { PillType } from 'src/app/component/pill/pill-type.enum';

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
  public isloaded = false;
  public overlayToggle = false
  public tagIcon = faTag;
  public pillType = PillType
  public OverlayOutput(value : any){
    
    this.overlayToggle = value
  }
  public OverlayToggle(){
    this.overlayToggle = !this.overlayToggle  
    console.log(this.overlayToggle)
  }
  @ViewChild('snackbar') public snackbar!: SnackbarComponent;
  public showSnackbar() {
    this.snackbar.show('example');
  }

  @ViewChild('bottomSheet') public bottomSheet!: BottonSheetComponent;
  public openBottomSheet() {
    this.bottomSheet?.show();
  }
  public buttonOptions: ButtonMeta[] = [
    { id: 'btn1', title: 'Option 1', isActive: true },
    { id: 'btn2', title: 'Option 2', isActive: false },
    { id: 'btn3', title: 'Option 3', isActive: false },
  ];
  public onButtonToggleSelection(selectedOption: any) {
    this.buttonOptions.forEach((option) => {
      option.isActive = false;
      option.isActive = option.id === selectedOption.id;
    });
  }

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
  public countdownDays! : number;

  constructor(
    private userDataService: UserDataService,
    private tabsService: TabsService,
  ) {}

  ngOnInit(): void {
    this.data = this.userDataService.getData;
    this.tabs = this.tabsService.getTabs;
  }
}
