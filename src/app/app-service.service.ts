import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {
  constructor(private http: HttpClient) { }
  getCustomers() {
    return this.http.get('../assets/json/data.json');
  }
}
