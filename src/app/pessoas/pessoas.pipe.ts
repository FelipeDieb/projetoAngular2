import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorNome'
})
export class FiltraPorNome implements PipeTransform {

  transform(pessoas,digitado: string){
        // captura o que foi digitado
        let filtro: string = digitado ? digitado.toLocaleLowerCase() : '';
        // se tem filtro, retorna a lista filtrada
        return filtro ? pessoas.filter(pessoa=> pessoa.title.toLocaleLowerCase().indexOf(filtro) != -1) : pessoas;
    }

}

@Pipe({
  name: 'filtroPorCpf'
})
export class FiltraPorCpf implements PipeTransform {

  transform(pessoas,digitado: string){
        // captura o que foi digitado
        let filtro: string = digitado ? digitado : '';
        // se tem filtro, retorna a lista filtrada
        return filtro ? pessoas.filter(pessoa=> pessoa.cpf.indexOf(filtro) != -1) : pessoas;
    }

}

