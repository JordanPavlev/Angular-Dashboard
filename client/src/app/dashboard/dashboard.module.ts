import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; // import MatPaginatorModule
import { productsService } from '@app/_services/productsService';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,

    RouterModule.forChild([{path: "dashboard", component: DashboardComponent}])
  ],
  providers: [
    productsService
  ]
})
export class DashboardModule { }
