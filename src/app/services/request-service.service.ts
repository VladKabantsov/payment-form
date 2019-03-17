import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserForm } from '../models/user-form';
import { MainForm } from '../models/main-form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {
  private baseUrl: string = environment.serverUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  getParams(hash?: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${hash}`);
  }

  save(main: MainForm, user: UserForm, hash: string): void {
    const data = { ...main, ...user };
    this.http.post(`${this.baseUrl}/${hash}`, JSON.stringify(data));
  }
}
