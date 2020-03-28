import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneQuizComponent } from './clone-quiz.component';

describe('CloneQuizComponent', () => {
  let component: CloneQuizComponent;
  let fixture: ComponentFixture<CloneQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
