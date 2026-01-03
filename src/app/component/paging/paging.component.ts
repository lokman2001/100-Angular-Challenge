import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent {
  public prev = faChevronLeft;
  public next = faChevronRight;
  @Input() public totalItems = 1;
  @Input() public pageSize = 20;
  @Input() public currentPage = 1;
  @Input() public step = 1;
  @Output() public changePageEvent = new EventEmitter<number>();

  public dialbleNext: boolean = false;
  public dialblePrev: boolean = false;

  public totalPage(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }
  public isCurrentPage(page: number): boolean {
    return this.currentPage === page;
  }
  public goto(page: number): void {
    this.changePageEvent.emit(page);
    console.log(page);
  }

  public pages(): number[] {
    let Pages: number[] = [];
    this.dialbleNext = false;
    this.dialblePrev = false;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    if (this.currentPage > 2) {
      Pages.push(this.currentPage - 2);
    }
    if (this.currentPage > 1) {
      Pages.push(this.currentPage - 1);
    }
    Pages.push(this.currentPage);
    if (this.currentPage + 1 <= this.totalPage()) {
      Pages.push(this.currentPage + 1);
    }
    if (this.currentPage + 2 < this.totalPage()) {
      Pages.push(this.currentPage + 2);
    }
    if (this.currentPage + 3 < this.totalPage() && this.currentPage === 1) {
      Pages.push(this.currentPage + 3);
    }
    if (this.currentPage === this.totalPage()) {
      this.dialbleNext = true;
    }
    if (this.currentPage === 1) {
      this.dialblePrev = true;
    }
    return Pages;
  }

  public gotoNext() {
    this.goto(this.currentPage + this.step);
  }
  public gotoPrev() {
    this.goto(this.currentPage - this.step);
  }
}
