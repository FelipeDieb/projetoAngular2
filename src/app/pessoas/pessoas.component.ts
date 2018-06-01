import { Component, OnInit , Input } from '@angular/core';
import { TelefonesComponent } from '../telefones/telefones.component';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent  {
    @Input() cod:number;
    @Input() nome:string;
    @Input() email: string;
    @Input() cpf: string;
    @Input() idade:number;
    @Input() telefone: Array<TelefonesComponent>;

}
