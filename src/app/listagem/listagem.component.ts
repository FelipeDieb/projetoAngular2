import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { PessoasComponent } from "app/pessoas/pessoas.component";

@Component({
  moduleId: module.id,
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent  {

    pessoas: PessoasComponent[] = [];
    pessoa: PessoasComponent = new PessoasComponent();
    http: Http;


  constructor(http: Http){
       this.http = http;
       this.listaPessoas();
  }

   listaPessoas(){
          this.http.get("http://localhost:8080/CrudPessoas/WebService/listar")
          .map(res => res.json()).subscribe(pessoas => {
                this.pessoas = pessoas;
                console.log(this.pessoas);
        },erro => console.log("Error Felipe "+ erro));
   }

   deletePessoa(cod){
        console.log(cod);

        let headers = new Headers();
        headers.append("Content-Type","application/json");

        this.http.post("http://localhost:8080/CrudPessoas/WebService/excluir/"+cod,{headers:headers})
           .subscribe(()=> {
                this.pessoa = new PessoasComponent(); 
                console.log("Delete com sucesso!");
         },erro => console.log("Error ao salvar: "+erro));
    }


}
