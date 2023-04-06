import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; // import MatPaginatorModule
import { productsService } from '@app/_services/productsService';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [MatSidenavModule],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forChild([{path: "", component: DashboardComponent}])
  ],
  providers: [
    productsService
  ]
})
export class DashboardModule { }
