import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/RickAndMorty';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {
  private body(data: any): string {
    return JSON.stringify(data);
  }

  private headers(){
    return {
      headers:{
        'Content-Type': 'application/json'
      }
    } 
  }

  private url(endpoint: string): string {
    return `https://rickandmortyapi.com/api/${endpoint}`;
  }
  constructor(private http:HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<any>(
      this.url('character'),
      this.headers()
    )
  }
}