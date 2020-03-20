import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedQuizComponent } from './updated-quiz.component';

describe('UpdatedQuizComponent', () => {
  let component: UpdatedQuizComponent;
  let fixture: ComponentFixture<UpdatedQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
