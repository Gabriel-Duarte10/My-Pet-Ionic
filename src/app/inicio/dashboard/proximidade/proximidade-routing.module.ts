import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximidadePage } from './proximidade.page';

const routes: Routes = [
  {
    path: '',
    component: ProximidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximidadePageRoutingModule {}
