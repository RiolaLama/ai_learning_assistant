import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesTab } from './quizzes-tab';

describe('QuizzesTab', () => {
  let component: QuizzesTab;
  let fixture: ComponentFixture<QuizzesTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzesTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzesTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
