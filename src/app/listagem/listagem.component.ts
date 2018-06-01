import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PessoasComponent } from "app/pessoas/pessoas.component";

@Component({
  moduleId: module.id,
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

    pessoas: PessoasComponent[] = [];
    //teste
    pessoa:PessoasComponent;

  constructor(http: Http){
     
        http.
        get("http://localhost:8080/CrudPessoas/WebService/listar")
        .map(res => res.json())
        .subscribe(pessoas => {
        
          this.pessoas = pessoas;
          console.log(this.pessoas);
        },erro => console.log("Error Felipe "+ erro));

  }

  ngOnInit() {
  }

}
