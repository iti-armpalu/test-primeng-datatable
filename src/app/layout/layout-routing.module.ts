import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {path: '', redirectTo: 'design-token-generator', pathMatch: 'full'},
      {
        path: 'design-token-generator',
        loadChildren: () =>
          import('./design-token-generator/design-token-generator.module')
            .then((m) => m.DesignTokenGeneratorModule)
            .catch((err) => {
              console.log(err);
            }),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
