import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from '../services/note.service'

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss']
})
export class FormNoteComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  newNote: Note = {
    title: '',
    body: '',
    footer: ''
  }

  
  ngOnInit(): void {

  }
  
  createNote() {
    const angularNote: Note = {
      title: 'nota desde angular',
      body: 'contenido de la nota desde angular',
      footer: '01/09/2020'
    }
    this.noteService.addNote(this.newNote)
      .subscribe(note => console.log(note));
    
  }

}
