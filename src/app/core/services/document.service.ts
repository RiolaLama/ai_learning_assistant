import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private API_URL = 'http://localhost:5000/api/documents';
  documents = signal<any[]>([]);

  constructor(private httpClient: HttpClient) {}

  loadAll() {
    this.httpClient.get<any[]>(this.API_URL).subscribe((docs) => {
      this.documents.set(docs);
    });
  }

  getOne(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/${id}`);
  }

  upload(title: string, file: File) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    return this.httpClient.post(this.API_URL, formData);
  }
}
