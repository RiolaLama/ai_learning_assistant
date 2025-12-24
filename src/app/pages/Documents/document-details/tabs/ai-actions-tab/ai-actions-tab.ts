import { Component } from '@angular/core';
import { ModalService } from '../../../../../core/services/modal.service';

@Component({
  selector: 'app-ai-actions-tab',
  imports: [],
  templateUrl: './ai-actions-tab.html',
  styleUrl: './ai-actions-tab.css',
})
export class AiActionsTab {
  constructor(private modalService: ModalService) {}

  generateSummary() {
    this.modalService.open('summary', 'Angular: A Concise Summary...');
  }

  extractKeyPoints() {
    this.modalService.open('keypoints', ['test']);
  }

  generateFlashcards() {
    this.modalService.open('flashcards');
  }

  generateQuizzes() {
    this.modalService.open('quizzes');
  }
}
