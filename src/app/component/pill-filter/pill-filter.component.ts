import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pill-filter',
  templateUrl: './pill-filter.component.html',
  styleUrls: ['./pill-filter.component.scss'],
})
export class PillFilterComponent {
  private pillsLabel!: string[];
  @Input() set pills(value: string[]) {
    this.pillsLabel = value;
    this.unSelectedPills = this.pillsLabel;
  }

  public unSelectedPills: string[] = [];
  public selectedPills: string[] = [];

  public addFilter(pillDetail: { hasBeenSelected: boolean; label: string }) {
    if (pillDetail.hasBeenSelected) {
      const selectedIndex = this.unSelectedPills.indexOf(pillDetail.label);
      const [selectedPill] = this.unSelectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPill);
    }
  }
  public removeFilter(pillDetail: { hasBeenSelected: boolean; label: string }) {
    if (!pillDetail.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(pillDetail.label);
      const [selectedPill] = this.selectedPills.splice(selectedIndex, 1);
      this.unSelectedPills.push(selectedPill);
    }
  }
}
