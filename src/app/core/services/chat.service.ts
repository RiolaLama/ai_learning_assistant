import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private API_URL = 'http://localhost:5000/api/chat';

  constructor(private http: HttpClient) {}

  ask(documentId: number, message: string) {
    return this.http.post<{ reply: string }>(`${this.API_URL}/${documentId}`, { message });
  }
}
