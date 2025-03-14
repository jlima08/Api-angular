import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Musicas } from './musicas';
import { MusicasService } from './musicas.service';

// json-server --watch dbmusicas.json

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.scss']
})
export class MusicsComponent implements OnInit {

  musicas$!: Observable<Musicas[]>;

  id = '';
  musica = '';
  autor = '';

  audio = new Audio('assets/WhatsApp Audio 2025-03-14 at 14.41.08.mpeg'); // Caminho da música
  tocando = false; // Controla música

  // tocarOuPausar() {
  //   if (this.tocando) {
  //     this.audio.pause();
  //   } else {
  //     this.audio.play();
  //   }
  //   this.tocando = !this.tocando;
  // }

  tocar() {
    if (!this.tocando) {
       
      this.audio.play();
    }
    this.tocando = !this.tocando;
  }

  Pausar(){
    if(this.tocando){
      this.audio.pause()
    }
    this.tocando = !this.tocando
  }

  
  

  constructor(private service: MusicasService) { }

  ngOnInit(): void {
    this.obterMusica();
    
  }

  obterMusica() {
    this.musicas$ = this.service.list();
  }

  addMusica() {
    if (!this.musica || !this.autor) return;

    if (this.id) {
      this.atualizar();
      return;
    }

    // this.service.addMusica({
    //   autor: this.autor, musica: this.musica,

    // })
    // .subscribe(_ => this.obterMusica())

    this.musicas$.subscribe(musicas => {
      const novoId = musicas.length > 0 ? (Math.max(...musicas.map(m => Number(m.id))) + 1).toString() : "1";

      this.service.addMusica({
        id: novoId,// Agora o ID é gerado corretamente
        autor: this.autor,
        musica: this.musica
      }).subscribe(() => {
        this.obterMusica();  // Atualiza a lista
        this.limparCampos(); // Limpa os inputs
      });
    });
  }

  limparCampos() {
    this.id = '';
    this.musica = '';
    this.autor = '';
  }

  atualizar() {
    this.service.editarMusica({
      id: this.id, autor: this.autor, musica: this.musica
    })
      .subscribe(() => {
        this.obterMusica();  // Atualiza a lista
        this.limparCampos(); // Limpa os inputs
      });


  }

  preencher(musica: Musicas) {
    this.id = musica.id!.toString();
    this.musica = musica.musica;
    this.autor = musica.autor
  }

  remover(id: string) {
    this.service.remover(id)
      .subscribe(() => {
        console.log('DELETADO');
        this.obterMusica();
      })
  }


}
