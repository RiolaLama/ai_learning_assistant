import { Component, signal } from '@angular/core';
import { ModalService } from '../../../../core/services/modal.service';
import { QuizService } from '../../../../core/services/quiz.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quiz-modal.html',
  styleUrl: './quiz-modal.css',
})
export class QuizModal {
  questions = signal(5);

  constructor(public modalService: ModalService, private quizService: QuizService) {}

  generate() {
    const docId = this.modalService.modalData()?.documentId;
    this.quizService.generateQuiz(docId, this.questions());
    this.modalService.close();
  }
}
