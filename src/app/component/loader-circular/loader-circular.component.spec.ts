import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderCircularComponent } from './loader-circular.component';

describe('LoaderCircularComponent', () => {
  let component: LoaderCircularComponent;
  let fixture: ComponentFixture<LoaderCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderCircularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
