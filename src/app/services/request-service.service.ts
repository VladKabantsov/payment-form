import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MainForm } from '../models/main-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {
  private baseUrl: string = environment.serverUrl;
  private saveUrl: string = environment.saveUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  getParams(hash?: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${hash}`);
  }

  save(main: MainForm, hash: string): void {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(`${this.saveUrl}/${hash}`, JSON.stringify(main), { headers }).subscribe();
  }
}
