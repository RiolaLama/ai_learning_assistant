import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../core/services/quiz.service';

@Component({
  selector: 'app-quiz-take',
  imports: [],
  templateUrl: './quiz-take.html',
  styleUrl: './quiz-take.css',
})
export class QuizTake {
  quiz: any;
  currentIndex = signal(0);

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    const quizId = this.router.url.split('/').pop()!;
    this.quiz = this.quizService.getQuiz(quizId);
  }

  question() {
    return this.quiz?.questions[this.currentIndex()];
  }

  next() {
    if (this.currentIndex() < this.quiz.questions.length - 1) {
      this.currentIndex.update((i) => i + 1);
    } else {
      this.router.navigate(['/quiz/results', this.quiz.id]);
    }
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update((i) => i - 1);
    }
  }

  selectAnswer(optionIndex: number) {
    this.quizService.answer(this.quiz.id, this.currentIndex(), optionIndex);
  }
}
