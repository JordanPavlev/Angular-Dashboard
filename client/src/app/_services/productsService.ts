import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@app/_models/product';
import { environment } from '@environments/environments';

@Injectable({
  providedIn: 'root'
})
export class productsService {
    private readonly apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { }

   token = localStorage.getItem('user');

  getProducts(): Observable<Product[]> {
    this.token = this.token!.replace(/"/g, '');
      
    return this.http.get<Product[]>(this.apiUrl,{headers: {Authorization: `Bearer ${this.token}`}} );
  }
}