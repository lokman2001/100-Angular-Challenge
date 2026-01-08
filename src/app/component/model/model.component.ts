import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  public closeIcon = faTimes;
  public isShow = false;
  @Input() public title: string = '';
  public open() {
    this.isShow = true;
  }
  public close() {
    this.isShow = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
