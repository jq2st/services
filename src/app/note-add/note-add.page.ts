import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.page.html',
  styleUrls: ['./note-add.page.scss'],
})
export class NoteAddPage implements OnInit {

  form: FormGroup

  constructor(private httpService: HttpService, private notesService: NotesService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  saveNote() {
    this.httpService.addNote(this.form.value)
      .subscribe(note => this.notesService.notes.unshift(note))
    this.router.navigate(['home'])
  }

}
