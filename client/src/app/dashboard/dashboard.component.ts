import { Component, OnInit, ViewChild } from '@angular/core';
import { productsService } from '@app/_services/productsService';
import { Product } from '@app/_models/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  authenticated = false;
  products: MatTableDataSource<Product> = new MatTableDataSource<Product>(); // updated line
  totalProducts = 0;
  currentPage = 1;
  pageSize = 20;
  test: Product[] = []

  constructor(private router: Router, private productService: productsService) {}

  ngOnInit(): void {
    this.authenticated = this.isCurrentUserAuthenticated();

    if (this.authenticated) { 
      this.getProducts();
    } 
  }

  private isCurrentUserAuthenticated(): boolean {
    // Implement your logic here to check if the user is authenticated
    return true; // Just returning true for demonstration purposes
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe((response) => {
      console.log(response[1].description);
      

      this.products = new MatTableDataSource<Product>(response);
      // this.totalProducts = response.length;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }

  signOut(): void {
    // Implement your logic here to sign out the user
    this.authenticated = false;
    this.router.navigate(['/signin']);
  }
}