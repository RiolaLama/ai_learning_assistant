import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal.html',
  styleUrl: './delete-modal.css',
})
export class DeleteModal {
  @Input() data: any;
}
