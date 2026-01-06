import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/other/animation/fade-in-out';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormDirty } from 'src/app/other/guard/form-dirty-interface';
import { Tab } from 'src/app/interface/tab';
import { TabsService } from 'src/app/service/tabs.service';
import { slideRight } from 'src/app/other/animation/slide-right';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.scss'],
  animations: [fadeInOut , slideRight],
})
export class OtherPageComponent implements IFormDirty {
  public form!: FormGroup;
  public faInfo = faInfoCircle;
  public cardIconEnable = true;
  public showBox = false;

  public tabs!: Tab[];
  public currentTab = 0;

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


  constructor(public formBuilder: FormBuilder , public Tabs : TabsService) {
    this.initializeForm();
    this.tabs = this.Tabs.getTabs
  }

  

  
  private initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
}
