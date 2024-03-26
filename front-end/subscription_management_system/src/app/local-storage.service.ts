import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private loggedInUserSubject: BehaviorSubject<any>;
  public loggedInUser$: Observable<any>;

  constructor() {
    this.loggedInUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('loggedInUser') || 'null')
    );
    this.loggedInUser$ = this.loggedInUserSubject.asObservable();
  }
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  public get loggedInUserValue(): any {
    return this.loggedInUserSubject.value;
  }

  public setLoggedInUser(user: any): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    this.loggedInUserSubject.next(user);
  }

  public clearLoggedInUser(): void {
    localStorage.removeItem('loggedInUser');
    this.loggedInUserSubject.next(null);
  }
}
