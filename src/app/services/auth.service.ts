import { Injectable } from '@angular/core';

const TOKEN = '';
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4MDY5Mjk2LCJpYXQiOjE3Mzc5Njg0OTYsImp0aSI6Ijg2MTRjYzIwODhjYTQ4YzlhNmJjYzIwM2FmYzI4NDk5IiwidXNlcl9pZCI6NDJ9.7t_Ntmmddh-Yp5tkiGxEra-MN91bB8K_qru04siL_aw';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getToken(): string | null {
    // TO DO get token from BE
    return TOKEN;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
