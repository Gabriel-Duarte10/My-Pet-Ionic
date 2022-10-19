import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximidadePageRoutingModule } from './proximidade-routing.module';

import { ProximidadePage } from './proximidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProximidadePageRoutingModule
  ],
  declarations: [ProximidadePage]
})
export class ProximidadePageModule {}
