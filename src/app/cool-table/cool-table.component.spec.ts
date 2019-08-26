import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolTableComponent } from './cool-table.component';

describe('CoolTableComponent', () => {
  let component: CoolTableComponent;
  let fixture: ComponentFixture<CoolTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
