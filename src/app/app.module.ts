import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Metron related
import { MetronDesignSystemLibModule } from '@nudgelabs/metron-design-system-lib';
import { MaterialModule } from './shared/material/material.module';
import { ColorPickerModule } from 'ngx-color-picker';

// Components
import { AppComponent } from './app.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorpickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MetronDesignSystemLibModule,
    MaterialModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
