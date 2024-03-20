import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionDTO } from '../interface/subscriptionDTO';
import { PlanDTO } from '../interface/PlanDTO';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  url = 'http://192.168.5.109/admin';

  getAllSubscription(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  updateSubscription(
    subscriptionId: number,
    planDTO: PlanDTO
  ): Observable<any> {
    return this.http.put<any>(`${this.url}/${subscriptionId}`, {
      subscriptionId,
      planDTO,
    });
  }
}
