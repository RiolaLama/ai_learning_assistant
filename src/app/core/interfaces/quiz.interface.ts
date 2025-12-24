export interface Quiz {
  id: string;
  documentId: string;
  createdAt: string;
  score: number;
  questionsCount: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface QuizResult {
  correctCount: number;
  incorrectCount: number;
  total: number;
  answers: {
    question: string;
    options: string[];
    selected: number;
    correct: number;
  }[];
}
