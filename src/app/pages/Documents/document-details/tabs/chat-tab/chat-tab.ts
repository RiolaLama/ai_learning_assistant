import { Component, effect, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../../../core/services/chat.service';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

@Component({
  selector: 'app-chat-tab',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-tab.html',
  styleUrl: './chat-tab.css',
})
export class ChatTab {
  @Input({ required: true }) documentId!: number;

  messages = signal<ChatMessage[]>([]);
  chatInput = signal('');
  isTyping = signal(false);

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  constructor(private chatService: ChatService) {
    effect(() => {
      this.messages();
      queueMicrotask(() => this.scrollToBottom());
    });
  }

  scrollToBottom() {
    if (!this.scrollContainer) return;
    const el = this.scrollContainer.nativeElement;
    el.scrollTop = el.scrollHeight;
  }

  sendMessage() {
    const text = this.chatInput().trim();
    if (!text) return;

    // User message
    this.messages.update((m) => [...m, { sender: 'user', text }]);
    this.chatInput.set('');
    this.isTyping.set(true);

    this.chatService.ask(this.documentId, text).subscribe({
      next: (res) => {
        this.messages.update((m) => [...m, { sender: 'ai', text: res.reply }]);
        this.isTyping.set(false);
      },
      error: () => {
        this.isTyping.set(false);
        this.messages.update((m) => [
          ...m,
          { sender: 'ai', text: 'Something went wrong. Please try again.' },
        ]);
      },
    });
  }
}
