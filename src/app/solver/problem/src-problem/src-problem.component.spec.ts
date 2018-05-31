import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcProblemComponent } from './src-problem.component';

describe('SrcProblemComponent', () => {
  let component: SrcProblemComponent;
  let fixture: ComponentFixture<SrcProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrcProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
