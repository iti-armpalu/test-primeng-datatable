import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../shared/material/material.module';
import { MetronDesignSystemLibModule } from '@nudgelabs/metron-design-system-lib';
import { DesignTokenGeneratorRoutingModule } from './design-token-generator-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    MetronDesignSystemLibModule,
    MaterialModule,
    DesignTokenGeneratorRoutingModule,
    FormsModule,
    NgxSliderModule,
    ColorPickerModule,
  ]
})
export class DesignTokenGeneratorModule {}
