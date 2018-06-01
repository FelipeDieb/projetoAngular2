import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';

import 'rxjs/add/operator/map';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { TabelaModule } from './tabela/tabela.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { ListagemModule } from './listagem/listagem.module';
import { routing } from './app.routes';
import { FiltraPorNome } from './pessoas/pessoas.pipe';
import { TelefonesComponent } from './telefones/telefones.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    FiltraPorNome,
    TelefonesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
