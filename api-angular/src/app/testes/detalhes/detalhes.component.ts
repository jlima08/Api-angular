import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  tabela:any;
  ngOnInit(): void {
    this.tabela = this.campeonatoService.getTabelaSerieA();
  }
  constructor(private campeonatoService:CampeonatoService){}

}
