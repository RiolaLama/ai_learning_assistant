import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { UploadModal } from '../../shared/components/modals/upload-modal/upload-modal';
import { SummaryModal } from '../../shared/components/modals/summary-modal/summary-modal';
import { DeleteModal } from '../../shared/components/modals/delete-modal/delete-modal';
import { QuizModal } from '../../shared/components/modals/quiz-modal/quiz-modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-root',
  standalone: true,
  imports: [CommonModule, UploadModal, SummaryModal, DeleteModal, QuizModal],
  templateUrl: './modal-root.html',
  styleUrl: './modal-root.css',
})
export class ModalRoot {
  constructor(public modalService: ModalService) {}

  close() {
    this.modalService.close();
  }
}
