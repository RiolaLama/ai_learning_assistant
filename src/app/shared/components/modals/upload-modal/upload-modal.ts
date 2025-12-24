import { Component, Input, signal } from '@angular/core';
import { ModalService } from '../../../../core/services/modal.service';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../../../../core/services/document.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-upload-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-modal.html',
  styleUrl: './upload-modal.css',
})
export class UploadModal {
  @Input() data: any;
  title = signal<string>('');
  selectedFile = signal<File | null>(null);

  constructor(
    public modalService: ModalService,
    private documentService: DocumentService,
    private toast: ToastService
  ) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.selectedFile.set(file);
  }

  cancel() {
    this.modalService.close();
  }

  upload() {
    if (!this.title() || !this.selectedFile()) {
      this.toast.error('Please enter a title and select a file.');

      return;
    }

    this.documentService.upload(this.title(), this.selectedFile()!).subscribe(() => {
      this.toast.success('Document uploaded successfully');
      this.documentService.loadAll();
      this.modalService.close();
    });
  }
}
