import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcnVariableComponent } from './wcn-variable.component';

describe('WcnVariableComponent', () => {
  let component: WcnVariableComponent;
  let fixture: ComponentFixture<WcnVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcnVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcnVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
