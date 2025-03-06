import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.scss']
})
export class OutputPropertiesComponent {
  
@Input() valor: number = 0;
@Output() mudouvalor = new EventEmitter(); //broadcast de eventos

  incrementa(){
    this.valor++
    this.mudouvalor.emit({novovalor: this.valor});
  }

  decrementa(){
    this.valor--
    this.mudouvalor.emit({novovalor: this.valor});
  }

}
