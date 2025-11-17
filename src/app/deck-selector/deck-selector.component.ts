import { Component, EventEmitter , Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Deck } from '../models/flashcard.model';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deck-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deck-selector.component.html',
  styleUrl: './deck-selector.component.css'
})
export class DeckSelectorComponent {
  @Input() decks: Deck[] = [];
  @Output() selectDeck = new EventEmitter<Deck>();
  @Output() createDeck = new EventEmitter<any>();

  newDeckName = '';

  addDeck(){
    if(this.newDeckName.trim()){
      this.createDeck.emit(this.newDeckName.trim());
      this.newDeckName = '';
    }
  }

}
