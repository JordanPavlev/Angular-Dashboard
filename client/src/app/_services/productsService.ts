import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '@app/_models/product';
import { environment } from '@environments/environments';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class productsService {
  private readonly apiUrl = `${environment.apiUrl}/products?page=1&page_size=60&sort_attr=id&sort_dir=desc`;

  constructor(private http: HttpClient,
    private router: Router,
  ) { }

  token = localStorage.getItem('user');
  tokenValue = this.token!.replace(/"/g, '');
  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.apiUrl, { headers: { Authorization: `Bearer ${this.tokenValue}` } });
  }
}
