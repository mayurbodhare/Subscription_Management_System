import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  url = 'http://192.168.5.109/admin';

  getAllSubscription(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
}
