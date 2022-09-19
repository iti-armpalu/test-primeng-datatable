import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Metron related
import { MetronDesignSystemLibModule } from '@nudgelabs/metron-design-system-lib';
import { MaterialModule } from './shared/material/material.module';
import { ColorPickerModule } from 'ngx-color-picker';

// Components
import { AppComponent } from './app.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';
import { DialogDownloadDesignTokensComponent } from './components/dialog-download-design-tokens/dialog-download-design-tokens.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorpickerComponent,
    DialogDownloadDesignTokensComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MetronDesignSystemLibModule,
    MaterialModule,
    ColorPickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
