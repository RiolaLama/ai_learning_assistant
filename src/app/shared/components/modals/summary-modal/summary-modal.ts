import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-modal',
  standalone: true,
  imports: [],
  templateUrl: './summary-modal.html',
  styleUrl: './summary-modal.css',
})
export class SummaryModal {
  @Input() type: string | null = null;
  @Input() data: any = null;
}
