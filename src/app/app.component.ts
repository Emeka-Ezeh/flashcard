import { Component, OnInit } from '@angular/core';
import { FlashcardEditorComponent } from './flashcard-editor/flashcard-editor.component';
import { FlashcardViewerComponent } from './flashcard-viewer/flashcard-viewer.component';
import { Flashcard, Deck } from './models/flashcard.model';
import { QuizModeComponent } from './quiz-mode/quiz-mode.component';
import { DeckSelectorComponent } from './deck-selector/deck-selector.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FlashcardEditorComponent,CommonModule, FlashcardViewerComponent, QuizModeComponent, DeckSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit{
  decks: Deck[] = [];
  selectedDeck: Deck | null = null;

  nextDeckId = 1;
  nextCardId = 1;

  ngOnInit() {
    const savedDecks = localStorage.getItem('flashcardDecks');
    if ( savedDecks){
      this.decks = JSON.parse(savedDecks);

      // restore IDs safely
      this.nextDeckId = this.decks.length ? Math.max(...this.decks.map(d => d.id)) + 1 : 1;
      this.nextCardId = this.decks.flatMap(d => d.cards).length ? Math.max(...this.decks.flatMap(d => d.cards).map(c => c.id)) + 1 : 1;
    }
  }

  saveDecks(){
    localStorage.setItem('flashcardDecks', JSON.stringify(this.decks));
  }

  createDeck(name: string) {
    this.decks.push({ id: this.nextDeckId++, name, cards: []});
  }

 selectDeck(deck: Deck){
    this.selectedDeck = deck;
 }

 addCard(card: { question: string; answer: string }) {
    if (this.selectedDeck) {
      this.selectedDeck.cards.push({ id: this.nextCardId++, ...card });
    }
    }
  }

