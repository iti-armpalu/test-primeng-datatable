import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';


// Metron Design System
import { MetronDesignSystemLibModule } from '@nudgelabs/metron-design-system-lib';
import { MaterialModule } from '../shared/material/material.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

// Components
import { LayoutComponent } from './layout.component';
import { DesignTokenGeneratorComponent } from './design-token-generator/design-token-generator.component';
import { HeaderComponent } from './design-token-generator/components/header/header.component';
import { ColorsComponent } from './design-token-generator/components/colors/colors.component';
import { TypographyComponent } from './design-token-generator/components/typography/typography.component';
import { ColorpickerComponent } from './design-token-generator/components/colorpicker/colorpicker.component';
import { InterfaceComponent } from './design-token-generator/components/interface/interface.component';
import { DialogDownloadDesignTokensComponent } from './design-token-generator/components/dialog-download-design-tokens/dialog-download-design-tokens.component';
import { SliderComponent } from './design-token-generator/components/slider/slider.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  declarations: [
    LayoutComponent,
    DesignTokenGeneratorComponent,
    HeaderComponent,
    DialogDownloadDesignTokensComponent,
    ColorsComponent,
    ColorpickerComponent,
    TypographyComponent,
    InterfaceComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MetronDesignSystemLibModule,
    MaterialModule,
    ColorPickerModule,
    NgxSliderModule,
    FormsModule,
    AngularMultiSelectModule
  ],
})
export class LayoutModule {}
