import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateUsuarioPage } from './update-usuario.page';

import { BrMaskerModule } from 'br-mask';

const routes: Routes = [
  {
    path: '',
    component: UpdateUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrMaskerModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UpdateUsuarioPage,
  ]
})
export class UpdateUsuarioPageModule {}
