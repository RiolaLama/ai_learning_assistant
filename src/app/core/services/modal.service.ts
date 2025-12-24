import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen = signal(false);
  modalType = signal<string | null>(null);
  modalData = signal<any>(null);

  open(type: string, data: any = null) {
    this.modalType.set(type);
    this.modalData.set(data);
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
    this.modalType.set(null);
    this.modalData.set(null);
  }
}
