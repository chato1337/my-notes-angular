import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../note.model'

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  constructor(private http: HttpClient) {}

  public getNotes(){
    return this.http.get<Note[]>('http://localhost:3001')
  }

  public addNote(note: Note){
    return this.http.post('http://localhost:3001/note', note);
  }

}
