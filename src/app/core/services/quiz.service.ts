import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuizService {
  quizzes = signal<any[]>([]);
  currentQuiz = signal<any>(null);

  generateQuiz(documentId: string, count: number) {
    // temporary fake generated questions
    const questions = Array.from({ length: count }).map((_, i) => ({
      id: i + 1,
      question: `Sample question ${i + 1}?`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: 0, // temporary
      answer: null,
    }));

    const newQuiz = {
      id: crypto.randomUUID(),
      documentId,
      createdAt: new Date().toISOString(),
      questionsCount: count,
      questions,
      score: 0,
    };

    this.quizzes.update((q) => [...q, newQuiz]);
    this.currentQuiz.set(newQuiz);
  }

  getQuiz(id: string) {
    return this.quizzes().find((q) => q.id === id);
  }

  answer(quizId: string, questionIndex: number, optionIndex: number) {
    const quiz = this.getQuiz(quizId);
    quiz.questions[questionIndex].answer = optionIndex;
  }
}
