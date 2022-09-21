import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../shared/material/material.module';
import { MetronDesignSystemLibModule } from '@nudgelabs/metron-design-system-lib';
import { DesignTokenGeneratorRoutingModule } from './design-token-generator-routing.module';
import { HeaderComponent } from 'src/app/layout/design-token-generator/components/header/header.component';
import { ColorsComponent } from 'src/app/layout/design-token-generator/components/colors/colors.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';
import { DialogDownloadDesignTokensComponent } from './components/dialog-download-design-tokens/dialog-download-design-tokens.component';
import { TypographyComponent } from './components/typography/typography.component';
import { InterfaceComponent } from './components/interface/interface.component';
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
    ColorPickerModule
  ]
})
export class DesignTokenGeneratorModule {}
