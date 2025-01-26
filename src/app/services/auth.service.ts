import { Injectable } from '@angular/core';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3ODIyNjcwLCJpYXQiOjE3Mzc3MjE4NzAsImp0aSI6ImMxNGUzNTE3MTk3YzQ5ZDZhZTMxZGUyYjE0MjI5ZWQ5IiwidXNlcl9pZCI6NDJ9.VqRg45aXkvtZwWlqAwKmccbmagSSEEymCd--xX_XEh8';

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
