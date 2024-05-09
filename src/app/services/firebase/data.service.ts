import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  private baseUrl = 'https://pizza-layout-angular-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/.json`); // Додайте правильний шлях до вашої бази даних
  }
}
