import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-flashcard-editor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './flashcard-editor.component.html',
  styleUrl: './flashcard-editor.component.css'
})
export class FlashcardEditorComponent {
  @Output() addFlashcard = new EventEmitter<any>();
  cardForm: FormGroup;

  constructor( private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }

  submit() {
    if( this.cardForm.valid){
      this.addFlashcard.emit(this.cardForm.value);
      this.cardForm.reset();
    }
  }

}
