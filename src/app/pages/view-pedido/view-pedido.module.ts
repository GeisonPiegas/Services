import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewPedidoPage } from './view-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPedidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewPedidoPage,]
})
export class ViewPedidoPageModule {}
