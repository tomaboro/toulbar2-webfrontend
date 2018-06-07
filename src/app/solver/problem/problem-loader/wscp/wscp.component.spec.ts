import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WscpComponent } from './wscp.component';

describe('WscpComponent', () => {
  let component: WscpComponent;
  let fixture: ComponentFixture<WscpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WscpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WscpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
