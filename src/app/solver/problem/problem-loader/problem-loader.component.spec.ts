import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemLoaderComponent } from './problem-loader.component';

describe('ProblemLoaderComponent', () => {
  let component: ProblemLoaderComponent;
  let fixture: ComponentFixture<ProblemLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
