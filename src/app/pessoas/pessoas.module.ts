import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas.component';
import { FiltraPorNome } from './pessoas.pipe';

@NgModule({
  imports: [
    CommonModule,PessoasModule
  ],
  declarations: [ PessoasComponent , FiltraPorNome],
  exports: [ PessoasComponent, FiltraPorNome ]
})
export class PessoasModule { }
