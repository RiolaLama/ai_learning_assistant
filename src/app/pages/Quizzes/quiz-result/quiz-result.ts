import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../core/services/quiz.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-quiz-result',
  imports: [DecimalPipe],
  templateUrl: './quiz-result.html',
  styleUrl: './quiz-result.css',
})
export class QuizResult {
  quiz = signal<any>(null);

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    const id = this.route.snapshot.params['id'];
    this.quiz.set(this.quizService.getQuiz(id));
  }

  get scorePercent() {
    return (this.quiz()?.score / this.quiz()?.questions.length) * 100;
  }
}
