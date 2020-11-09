import { Component } from '@angular/core';
import {Note} from './note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-notes';
  create = false;
  showModal() {
    if (this.create === false){
      this.create = true
    } else {
      this.create = false
    }
  }
}
