import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcnfRuleComponent } from './wcnf-rule.component';

describe('WcnfRuleComponent', () => {
  let component: WcnfRuleComponent;
  let fixture: ComponentFixture<WcnfRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcnfRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcnfRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
