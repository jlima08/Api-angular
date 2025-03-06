import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  nome: string = "abc"
  pessoa = {
    nome: "",
    idade: 0
  }

  onMudouValor(evento: any){
    console.log(evento.novovalor)

  }

}
