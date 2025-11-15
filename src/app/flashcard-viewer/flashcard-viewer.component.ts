import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Flashcard } from '../models/flashcard.model';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-flashcard-viewer',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './flashcard-viewer.component.html',
  styleUrl: './flashcard-viewer.component.css',
  animations: [
    trigger('flipCard', [
      state('front', style({transform: 'rotateY(0deg)'})),
      state('back', style({transform: 'rotateY(180deg)'})),
      transition('front <=> back', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class FlashcardViewerComponent {
  @Input() flashcards: Flashcard[]= [];
  currentIndex = 0;

  flipped = false;

  toggleFlip(){
    this.flipped = !this.flipped;
  }

  nextCard(){
    this.flipped = false;
    this.currentIndex = ( this.currentIndex + 1) % this.flashcards.length;
  }

}
