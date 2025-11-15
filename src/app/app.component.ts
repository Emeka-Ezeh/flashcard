import { Component } from '@angular/core';
import { FlashcardEditorComponent } from './flashcard-editor/flashcard-editor.component';
import { FlashcardViewerComponent } from './flashcard-viewer/flashcard-viewer.component';
import { Flashcard } from './models/flashcard.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FlashcardEditorComponent, FlashcardViewerComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


  flashcards: Flashcard[] = [];
  nextId = 1;

  addCard(card: { question: string; answer: string }) {
    this.flashcards.push({
      id: this.nextId++,
      ...card
    })
  }
}
