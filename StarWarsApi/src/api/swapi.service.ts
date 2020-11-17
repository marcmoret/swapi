import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getShips(): Observable<any> {
    return this.http.get(`${baseUrl}/starships`);
  }

  getPilot(url: string): Observable<any> {
    return this.http.get(url);
  }
}
