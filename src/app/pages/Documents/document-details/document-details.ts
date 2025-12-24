import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { DocumentService } from '../../../core/services/document.service';

import { ContentTab } from './tabs/content-tab/content-tab';
import { ChatTab } from './tabs/chat-tab/chat-tab';
import { AiActionsTab } from './tabs/ai-actions-tab/ai-actions-tab';
import { FlashcardsTab } from './tabs/flashcards-tab/flashcards-tab';
import { QuizzesTab } from './tabs/quizzes-tab/quizzes-tab';

@Component({
  selector: 'app-document-details',
  imports: [ContentTab, ChatTab, AiActionsTab, FlashcardsTab, QuizzesTab],
  templateUrl: './document-details.html',
  styleUrl: './document-details.css',
})
export class DocumentDetails {
  // ONE source of truth
  document = signal<any | null>(null);
  loading = signal(true);
  documentId!: number;

  activeTab = signal<'content' | 'chat' | 'actions' | 'flashcards' | 'quizzes'>('content');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private documentService: DocumentService,
    private sanitizer: DomSanitizer
  ) {
    const documentId = Number(this.route.snapshot.paramMap.get('id'));

    this.documentService.getOne(documentId).subscribe((doc) => {
      this.document.set(doc);
      this.loading.set(false);
    });
  }

  /** computed PDF url */
  pdfUrl(): SafeResourceUrl | null {
    if (!this.document()) return null;

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `http://localhost:5000/uploads/${this.document().stored_filename}`
    );
  }

  setTab(tab: typeof this.activeTab extends () => infer T ? T : never) {
    this.activeTab.set(tab);
  }

  goBack() {
    this.router.navigate(['/documents']);
  }
}
