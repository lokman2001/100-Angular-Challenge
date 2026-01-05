import { Component, Input, OnInit } from '@angular/core';
import { findIconDefinition, IconDefinition } from '@fortawesome/fontawesome-svg-core'; 
import { PillType } from './pill-type.enum';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent  {
    @Input() public icon! : IconDefinition;
    @Input() public title = 'Pill Title';
    @Input() public type : PillType  = PillType.default;
}
