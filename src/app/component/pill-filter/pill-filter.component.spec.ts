import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillFilterComponent } from './pill-filter.component';

describe('PillFilterComponent', () => {
  let component: PillFilterComponent;
  let fixture: ComponentFixture<PillFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
