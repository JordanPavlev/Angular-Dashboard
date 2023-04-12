import { Component, OnInit, ViewChild } from '@angular/core';
import { productsService } from '@app/_services/productsService';
import { Product } from '@app/_models/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';
import { authService } from '@app/_services/authService';
import { MatIconButton } from '@angular/material/button';
import { Title } from "@angular/platform-browser";
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
  pageSize = 20;
  showFiller = false;
  responseArray = []
  dataSource: Product[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(
    private router: Router,
    private productService: productsService,
    private authService: authService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Dashboard");
  }

  ngOnInit(): void {
    if (this.isCurrentUserAuthenticated()) {
      console.log("authenticated");

      this.getProducts()
    }
    else {
      console.log("not authenticated");
      this.logOut()
    }

  }

  ngAfterViewInit() {
    this.paginator!.page.subscribe(() => {
      this.dataSource = this.getPageData(this.paginator!.pageIndex);
    });
  }

  private isCurrentUserAuthenticated(): boolean {
    const a = this.productService.getProducts().subscribe((response) => {
      if (response) {
        console.log(response);
        return true
      }
      else return false

    })

   if (a) {
    return true
   }
   else return false
    }

  private getProducts(): void {
    this.productService.getProducts()?.subscribe((response) => {

      this.responseArray = Object.values(response)[0]

      this.products = new MatTableDataSource<Product[]>(this.responseArray);
      // this.totalProducts = response.length;
    });
  }

  getPageData(pageIndex: number): Product[] {
    const startIndex = pageIndex * this.pageSize;
    return this.responseArray.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }

  logOut(): void {
    this.authService.logout()
  }


}
