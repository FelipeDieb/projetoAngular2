import { Component } from '@angular/core';
import { PessoasComponent } from '../pessoas/pessoas.component';
import { Http, Headers } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  {

  pessoa: PessoasComponent = new PessoasComponent();
  http: Http;

  constructor(http: Http){
    this.http = http;
  }

    cadastrar(event){
        event.preventDefault();
        console.log(this.pessoa);

        let headers = new Headers();
        headers.append("Content-Type","application/json");
        this.http.post("http://localhost:8080/CrudPessoas/WebService/cadastrar",JSON.stringify(this.pessoa),{headers:headers})
        .subscribe(()=> {
          this.pessoa = new PessoasComponent(); 
          console.log("Salvo com sucesso!");
        },erro => console.log("Error ao salvar: "+erro));
    }

}
