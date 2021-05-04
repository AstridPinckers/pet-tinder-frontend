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
    //return this.http.get<Pet[]>(this.url);
    return this.http.get<Pet[]>(this.url).pipe(map(response => response.sort((p1: Pet, p2: Pet) => p1.name.localeCompare(p2.name))));
  }

  getPetByName(name: string): Observable<any> {
    return this.http.get<Pet>(this.url+'/'+name);
  }

  addPet(pet: Pet) {
    return this.http.post<Pet>(this.url,pet);
  }

  deletePet(id: number){
    return this.http.delete(this.url+'/'+id);
  }

  sendMessage(name: string){
    return this.http.post<string>(this.url+'/sendText',name);
  }

  incrementPopularity(name: string){
    return this.http.get(this.url+'/'+name+'/incrementPopularity');
  }
}
