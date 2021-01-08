import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  link = 'http://localhost:5000/api'

  constructor(private http: HttpClient) { }

  addNote(item): Observable<any> {
    return this.http.post(this.link + '/notes', item)
  }

  getNotes(): Observable<any> {
    return this.http.get(this.link + '/notes')
  }

  getNote(id): Observable<any> {
    return this.http.get(this.link + '/notes/' + id)
  }

  deleteNote(id): Observable<any> {
    return this.http.delete(this.link + '/notes/' + id)
  }

  editNote(item): Observable<any> {
    return this.http.put(this.link + '/notes/' + item.id, item)
  }

}
