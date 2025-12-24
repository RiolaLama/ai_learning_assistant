import { Component } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { DocumentService } from '../../../core/services/document.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-document-list',
  imports: [DatePipe],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {
  documents: any[] = [];

  constructor(
    private router: Router,
    public modalService: ModalService,
    public documentService: DocumentService
  ) {
    this.documentService.loadAll();
  }
  openDetails(docId: number) {
    this.router.navigate(['/documents', docId]);
  }
  openUpload() {
    this.modalService.open('upload');
  }
}
