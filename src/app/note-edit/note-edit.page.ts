import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { NotesService } from '../services/notes.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.page.html',
  styleUrls: ['./note-edit.page.scss'],
})
export class NoteEditPage implements OnInit {

  form: FormGroup
  qId
  qNote
  loading = false

  constructor(private httpService: HttpService, private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
    this.route.params.subscribe((p: Params) => {
      this.qId = p.id;
      this.httpService.getNote(this.qId)
        .subscribe(note => {
          this.qNote = note
          this.form = new FormGroup({
            name: new FormControl(this.qNote.name, Validators.required),
            description: new FormControl(this.qNote.description, Validators.required)
          })
          this.loading = false
        })
    })  
  }

  saveNote() {
    this.httpService.editNote({...this.form.value, id: this.qId})
      .subscribe(note => this.notesService.notes.unshift(note))
    this.router.navigate(['home'])
  }
}
