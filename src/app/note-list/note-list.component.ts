import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  public notes: Note[]  = []

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.fetchNotes()
  }

  fetchNotes() {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes)
  }

}
