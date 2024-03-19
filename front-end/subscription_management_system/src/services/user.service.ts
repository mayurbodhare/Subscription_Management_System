import { Injectable } from '@angular/core';
// import { UserDTO } from '../interface/UserDTO';
import { HttpClient } from '@angular/common/http';
import { LoginResponseDTO } from '../interface/LoginResponseDTO';
import { UserDTO } from '../interface/userDTO';
import { Observable, Subscription } from 'rxjs';
import { SubscriptionDTO } from '../interface/subscriptionDTO';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginResponse: any;
  loggedInUser!: UserDTO;
  allSubscriptions!: SubscriptionDTO[];
  constructor(private http: HttpClient) {}
  url = 'http://192.168.5.110';

  loginUser(email: any, password: any): Observable<any> {
    return this.http.post<LoginResponseDTO>(`${this.url}/user/login`, {
      email,
      password,
    });
  }

  signUpUser(user: UserDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.url}/user/signup`, user);
  }

  getAllSubscriptions(): Observable<SubscriptionDTO[]>{
    return this.http.get<SubscriptionDTO[]>(`${this.url}/admin`);
  }
  
}
