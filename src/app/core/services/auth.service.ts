import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto, LoginResponse } from '../../shared/interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.apiService.post('auth/login', loginDto);
  }
}
