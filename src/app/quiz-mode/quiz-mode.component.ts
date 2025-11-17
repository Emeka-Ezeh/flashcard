import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Flashcard } from '../models/flashcard.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-quiz-mode',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz-mode.component.html',
  styleUrl: './quiz-mode.component.css'
})
export class QuizModeComponent {
  @Input() flashcards: Flashcard[] = [];

  currentIndex = 0;
  userAnswer = '';
  score: number = 0;
  showResult: boolean = false;

  submitAnswer() {
    const correct = this.userAnswer.trim().toLocaleLowerCase() === this.flashcards[this.currentIndex].answer.trim().toLocaleLowerCase();
    if(correct) this.score++;

    this.userAnswer='';

    if ( this.currentIndex >= this.flashcards.length -1){
      this.showResult = true;
    }
  }


    restartQuiz() {
    this.currentIndex = 0;
    this.score = 0;
    this.showResult = false;
    this.userAnswer = '';
  }

}
