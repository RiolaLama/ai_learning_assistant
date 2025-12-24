import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizModal } from './quiz-modal';

describe('QuizModal', () => {
  let component: QuizModal;
  let fixture: ComponentFixture<QuizModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
