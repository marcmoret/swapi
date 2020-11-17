import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getShips(): Promise<any> {
    return this.http.get(`${baseUrl}/starships`).toPromise();
  }

  getPilots(): Promise<any> {
    return this.http.get(`${baseUrl}/people`).toPromise();
  }
}
