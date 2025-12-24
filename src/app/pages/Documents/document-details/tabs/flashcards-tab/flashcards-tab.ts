import { Component, signal } from '@angular/core';
import { ModalService } from '../../../../../core/services/modal.service';

@Component({
  selector: 'app-flashcards-tab',
  imports: [],
  templateUrl: './flashcards-tab.html',
  styleUrl: './flashcards-tab.css',
})
export class FlashcardsTab {
  constructor(private modalService: ModalService) {}

  // Later will be replaced with real backend data
  flashcards = signal<any[]>([]);

  generateFlashcards() {
    this.modalService.open('flashcards');
  }
}
