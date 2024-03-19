import { Injectable } from '@angular/core';
// import { UserDTO } from '../interface/UserDTO';
import { HttpClient } from '@angular/common/http';
import { LoginResponseDTO } from '../interface/LoginResponseDTO';
import { UserDTO } from '../interface/userDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginResponse: any;
  loggedInUser!: UserDTO;
  constructor(private http: HttpClient) {}
  url = 'http://192.168.5.110/user';

  loginUser(email: any, password: any): Observable<any> {
    return this.http.post<LoginResponseDTO>(`${this.url}/login`, {
      email,
      password,
    });
  }

  signUpUser(user: UserDTO): Observable<any> {
    return this.http.post<LoginResponseDTO>(`${this.url}/signup`, user);
  }
}
