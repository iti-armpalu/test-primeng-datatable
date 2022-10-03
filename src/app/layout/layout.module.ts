import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// NGX
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Metron Design System
import { MetronDesignSystemLibModule } from '@nudgelabs/metron-design-system-lib';
import { MaterialModule } from '../shared/material/material.module';

// Components
import { LayoutComponent } from './layout.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';




@NgModule({
  declarations: [
    LayoutComponent,
    NgxDatatableComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MetronDesignSystemLibModule,
    MaterialModule,
    FormsModule,
    NgxDatatableModule,
    HttpClientModule


  ],
})
export class LayoutModule {}
