import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectVsReplaySubjectVsBehaviorSubjectComponent } from './subject-vs-replay-subject-vs-behavior-subject.component';

describe('SubjectVsReplaySubjectVsBehaviorSubjectComponent', () => {
  let component: SubjectVsReplaySubjectVsBehaviorSubjectComponent;
  let fixture: ComponentFixture<SubjectVsReplaySubjectVsBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectVsReplaySubjectVsBehaviorSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectVsReplaySubjectVsBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
