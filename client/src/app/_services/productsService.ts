import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '@app/_models/product';
import { environment } from '@environments/environments';

@Injectable({
  providedIn: 'root'
})
export class productsService {
    private readonly apiUrl = `${environment.apiUrl}/products?page=1&page_size=60&sort_attr=id&sort_dir=desc`;

  constructor(private http: HttpClient) { }

   token = localStorage.getItem('user');

  getProducts(): Observable<Product> {
    const tokenValue =   this.token!.replace(/"/g, '');
    const tokenValuee = this.token?.substring(7, this.token?.length)
    console.log(tokenValue);
    
    console.log(tokenValuee);
    

    return this.http.get<Product>(this.apiUrl,{headers: {Authorization: `Bearer ${tokenValue}`}} );
  }
}
