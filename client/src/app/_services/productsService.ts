import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '@app/_models/product';
import { environment } from '@environments/environments';

@Injectable({
  providedIn: 'root'
})
export class productsService {
    private readonly apiUrl = `${environment.apiUrl}/products?page=1&page_size=21&sort_attr=id&sort_dir=desc`;

  constructor(private http: HttpClient) { }

   token = localStorage.getItem('user');

  getProducts(): Observable<Product> {
    this.token = this.token!.replace(/"/g, '');

    return this.http.get<Product>(this.apiUrl,{headers: {Authorization: `Bearer ${this.token}`}} );
  }
}
