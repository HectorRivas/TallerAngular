import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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
    return `https://reqres.in/api/${endpoint}`;
  }

  constructor(private http:HttpClient) { }

  public login(user: string, password: string) {
    return this.http.post<any>(
      this.url('login'),
      this.body({ email: user, password }),
      this.headers()
    );
  }
}