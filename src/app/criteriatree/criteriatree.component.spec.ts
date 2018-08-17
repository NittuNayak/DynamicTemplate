import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriatreeComponent } from './criteriatree.component';

describe('CriteriatreeComponent', () => {
  let component: CriteriatreeComponent;
  let fixture: ComponentFixture<CriteriatreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriatreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriatreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
