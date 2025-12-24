import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content-tab',
  templateUrl: './content-tab.html',
  styleUrl: './content-tab.css',
})
export class ContentTab {
  @Input() pdfUrl!: SafeResourceUrl | null;
}
