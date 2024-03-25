import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionDTO } from '../interface/subscriptionDTO';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost/admin';

  getAllSubscription(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  updateSubscription(
    subscriptionId: number,
    subscription: SubscriptionDTO
  ): Observable<any> {
    return this.http.put<any>(`${this.url}/${subscriptionId}`, subscription);
  }

  updatePlan(planDTO: any): Observable<any> {
    return this.http.post<any>(`${this.url}/updateplan`, planDTO);
  }

  createSubscription(subscription: SubscriptionDTO): Observable<any> {
    return this.http.post<any>(`${this.url}`, subscription);
  }
}
