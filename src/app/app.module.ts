import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NoteService } from './services/note.service';
import { NoteListComponent } from './note-list/note-list.component';
import { FormNoteComponent } from './form-note/form-note.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NoteItemComponent,
    NoteListComponent,
    FormNoteComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
