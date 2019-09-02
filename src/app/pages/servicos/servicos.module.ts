import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicosPage } from './servicos.page';
import { SharedModule } from 'src/app/Component/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ServicosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ServicosPage,
  ]
})
export class ServicosPageModule {}
