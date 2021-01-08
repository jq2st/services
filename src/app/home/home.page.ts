import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  notes = []

  constructor(private httpService: HttpService, private notesService: NotesService) {}

  ngOnInit() {
    this.httpService.getNotes()
      .subscribe(notes => this.notesService.notes = notes)
  }

  deleteNote(id) {
    this.httpService.deleteNote(id)
      .subscribe(item => {
        this.notesService.notes = this.notesService.notes.filter(i => {
          return i._id != id
        })
      })
  }
}
