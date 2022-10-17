import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Prime NG dfatatble
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';

// Metron Design System
import { MetronDesignSystemLibModule } from '@nudgelabs/metron-design-system-lib';
import { MaterialModule } from '../shared/material/material.module';

// Components
import { LayoutComponent } from './layout.component';
import { PrimengDatatableComponent } from './primeng-datatable/primeng-datatable.component';
import { CustomerService } from './primeng-datatable/customerservice';
import { ProductService } from './primeng-datatable/productservice';




@NgModule({
  declarations: [
    LayoutComponent,
    PrimengDatatableComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MetronDesignSystemLibModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  providers: [CustomerService, ProductService]
})
export class LayoutModule {}
