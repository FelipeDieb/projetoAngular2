import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent  {
   
   @Input() title: string;

 

}
