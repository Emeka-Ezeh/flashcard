export interface Flashcard {
  id: number;
  question: string;
  answer: string;
}

export interface Deck {
  id: number;
  name: string;
  cards: Flashcard[];
}
