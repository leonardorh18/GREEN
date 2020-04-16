import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensagemPage } from './mensagem.page';

const routes: Routes = [
  {
    path: '',
    component: MensagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensagemPageRoutingModule {}
