import { Component } from '@angular/core';
import { DocumentService } from '../../../core/services/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  documents: any[] = [];
  constructor(public documentService: DocumentService, private router: Router) {
    this.documentService.loadAll();
  }

  activities = [
    {
      id: 1,
      title: 'Accessed Document: Angular Core Concepts',
      date: 'Uploaded 5 minutes ago',
    },
    {
      id: 2,
      title: 'Accessed Document: Angular Component Lifecycle',
      date: 'Uploaded 1 hour ago',
    },
    {
      id: 3,
      title: 'Accessed Document: RxJS Operators Overview',
      date: 'Uploaded yesterday',
    },
    {
      id: 4,
      title: 'Accessed Document: TypeScript for Angular Developers',
      date: 'Uploaded 2 days ago',
    },
  ];
  openDocuments() {
    this.router.navigate(['/documents']);
  }
}
