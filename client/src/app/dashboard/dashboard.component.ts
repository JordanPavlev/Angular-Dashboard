import { Component, OnInit, ViewChild } from '@angular/core';
import { productsService } from '@app/_services/productsService';
import { Product } from '@app/_models/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';
import { authService } from '@app/_services/authService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  authenticated = false;
  products: MatTableDataSource<Product[]> = new MatTableDataSource<Product[]>(); // updated line
  totalProducts = 0;
  currentPage = 1;
  pageSize = 4;



  constructor(
    private router: Router,
     private productService: productsService,
     private authService: authService
    ) {}

  ngOnInit(): void {
    this.getProducts()
  }

  private isCurrentUserAuthenticated(): boolean {
    return true; // Just returning true for demonstration purposes
  }

  private getProducts(): void {
    this.productService.getProducts().subscribe((response) => {

      const responseArray = Object.values(response)[0]

      this.products = new MatTableDataSource<Product[]>(responseArray);
      // this.totalProducts = response.length;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    console.log('da stava');

  }

  logOut() :void {
    this.authService.logout()
  }


}
