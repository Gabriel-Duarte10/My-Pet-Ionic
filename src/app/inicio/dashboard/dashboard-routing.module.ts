import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '', redirectTo: 'listagem', pathMatch: 'full'
      },
      {
        path: 'listagem',
        loadChildren: () => import('./listagem/listagem.module').then( m => m.ListagemPageModule)
      },
      {
        path: 'proximidade',
        loadChildren: () => import('./proximidade/proximidade.module').then( m => m.ProximidadePageModule)
      },
      {
        path: 'mensagens',
        loadChildren: () => import('./mensagens/mensagens.module').then( m => m.MensagensPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
