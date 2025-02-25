import { Component } from '@angular/core';

@Component({
  selector: 'app-loiane',
  templateUrl: './loiane.component.html',
  styleUrls: ['./loiane.component.scss']
})
export class LoianeComponent {

  aba: string = '';

  isCardLayout: boolean = true; // Inicia com o layout de cards

  items = [
    { title: 'Item 1', description: 'Descrição do item 1' },
    { title: 'Item 2', description: 'Descrição do item 2' },
    // { title: 'Item 3', description: 'Descrição do item 3' },
  ];

  bixos = [ 
     {nome: 'Duck', idade: '12 anos'},
     {nome: 'Mia', idade: '14 anos'},
     {nome: 'White', idade: '12 anos'},
     {nome: 'Juju', idade: '2 meses'},
  ];

  toggleLayout() {
    this.isCardLayout = !this.isCardLayout; // Alterna entre os layouts
  }

  ngOnInit(){
    for (let i=0; i < this.bixos.length; i++){
      let bixos = this.bixos[i];
    }

  }


}
