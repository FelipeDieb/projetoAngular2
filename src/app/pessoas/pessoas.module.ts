import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas.component';
import { PessoasPipe } from './pessoas.pipe';

@NgModule({
  imports: [
    CommonModule,PessoasModule
  ],
  declarations: [ PessoasComponent , PessoasPipe],
  exports: [ PessoasComponent, PessoasPipe ]
})
export class PessoasModule { }
