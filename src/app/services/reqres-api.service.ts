import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {
  private body(data: any): string {
    return JSON.stringify(data);
  }

  private headers(){
    return {
      headers:{
        'Content-Type': 'application/json'
      }
    } 
  }

  private url(endpoint: string): string {
    //http://192.168.100.10:8080/api/user/login/
    return `http://192.168.100.10:8080/api/${endpoint}`;
  }

  constructor(private http:HttpClient) { }

  public login(user: string, password: string) {
    return this.http.post<any>(
      this.url('user/login/'),
      this.body({ email: user, password }),
      this.headers()
    );
  }
}