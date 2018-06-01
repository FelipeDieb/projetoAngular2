import { Component, Input } from '@angular/core';
import { PessoasComponent }  from '../pessoas/pessoas.component';

@Component({
  selector: 'app-telefones',
  templateUrl: './telefones.component.html',
  styleUrls: ['./telefones.component.css']
})
export class TelefonesComponent {
    @Input() cod:number;
    @Input() ddd:string;
    @Input() numero:string;
    @Input() pessoa:PessoasComponent;
  
}
