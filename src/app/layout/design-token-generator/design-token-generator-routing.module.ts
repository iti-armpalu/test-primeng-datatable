import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignTokenGeneratorComponent } from './design-token-generator.component';

const routes: Routes = [
  {
    path: '',
    component: DesignTokenGeneratorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignTokenGeneratorRoutingModule {}
