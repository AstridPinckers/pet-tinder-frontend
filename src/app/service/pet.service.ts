import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Pet } from '../model/pet';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this.url).pipe(map(response => response.sort((p1: Pet, p2: Pet) => p1.name.toLocaleLowerCase > p2.name.toLocaleLowerCase ? 1 : -1)));
  }
}
