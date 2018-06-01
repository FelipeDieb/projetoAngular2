import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { inject } from "@angular/core/testing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GO IT!';
/*
  pessoas: Object[] = [];
  constructor(http: Http){


    http.
    get("http://localhost:8080/Shabath/webservice/listaEventos")
    .map(res => res.json())
    .subscribe(pessoas => {
     
      this.pessoas = pessoas;
      console.log(this.pessoas);
    },erro => console.log("Error Felipe "+ erro));

  }*/
}
