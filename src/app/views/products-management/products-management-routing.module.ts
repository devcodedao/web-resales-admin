import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Quản lý sản phẩm'
    },
    children: [
      {
        path: '',
        redirectTo: 'products-management'
      },
      {
        path: '',
        component: ProductsComponent,
        data: {
          title: 'Chi tiết ds sản phẩm'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
