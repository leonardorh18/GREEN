import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensagemPageRoutingModule } from './mensagem-routing.module';

import { MensagemPage } from './mensagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensagemPageRoutingModule
  ],
  declarations: [MensagemPage]
})
export class MensagemPageModule {}
