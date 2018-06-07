import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WscpVariableComponent } from './wscp-variable.component';

describe('WscpVariableComponent', () => {
  let component: WscpVariableComponent;
  let fixture: ComponentFixture<WscpVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WscpVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WscpVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
