import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WscpRuleComponent } from './wscp-rule.component';

describe('WscpRuleComponent', () => {
  let component: WscpRuleComponent;
  let fixture: ComponentFixture<WscpRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WscpRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WscpRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
