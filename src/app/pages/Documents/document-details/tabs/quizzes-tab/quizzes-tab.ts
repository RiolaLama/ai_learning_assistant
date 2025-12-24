import { Component } from '@angular/core';
import { QuizService } from '../../../../../core/services/quiz.service';
import { ModalService } from '../../../../../core/services/modal.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quizzes-tab',
  imports: [DatePipe],
  templateUrl: './quizzes-tab.html',
  styleUrl: './quizzes-tab.css',
})
export class QuizzesTab {
  quizzes: any[] = [];

  constructor(
    private quizService: QuizService,
    private modal: ModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.quizzes = this.quizService.quizzes();
  }

  openGenerateModal() {
    this.modal.open('generate-quiz', { documentId: '123' });
  }

  startQuiz(id: string) {
    this.router.navigate(['/quiz/take', id]);
  }

  viewResults(id: string) {
    this.router.navigate(['/quiz/results', id]);
  }
}
