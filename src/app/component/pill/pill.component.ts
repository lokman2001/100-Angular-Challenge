import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { PillType } from './pill-type.enum';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
})
export class PillComponent {
  public closeIcon = faTimesCircle;
  @Input() public icon!: IconDefinition;
  @Input() public label = 'Pill Title';
  @Input() public type: PillType = PillType.info;
  @Input() public isActive: boolean = false;
  @Input() public canBeSelect: boolean = false;
  @Output() public select = new EventEmitter<{
    hasBeenSelected: boolean;
    label: string;
  }>();

  public toggle() {
    this.isActive = !this.isActive;
    this.select.emit({
      hasBeenSelected: this.isActive,
      label: this.label,
    });
  }
}
