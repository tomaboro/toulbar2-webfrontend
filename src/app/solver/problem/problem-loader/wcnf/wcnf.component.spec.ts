import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcnfComponent } from './wcnf.component';

describe('WcnfComponent', () => {
  let component: WcnfComponent;
  let fixture: ComponentFixture<WcnfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcnfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
