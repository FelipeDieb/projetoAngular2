import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabelaComponent} from './tabela.component';

@NgModule({
  exports: [TabelaComponent],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class TabelaModule { }
