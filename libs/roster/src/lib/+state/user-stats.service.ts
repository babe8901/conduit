import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStatsService {
  constructor(private http: HttpClient) {}

  getUserStats(): Observable<any> {
    return this.http.get('/api/user/stats');
  }
}
