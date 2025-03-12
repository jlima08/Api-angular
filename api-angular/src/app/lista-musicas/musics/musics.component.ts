import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Musicas } from './musicas';
import { MusicasService } from './musicas.service';

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


  constructor(private service: MusicasService) {

  }

  ngOnInit(): void {
    this.obterMusica();


  }

  obterMusica() {
    this.musicas$ = this.service.list();
  }

  addMusica() {
    if (!this.musica || !this.autor) return;

    if (this.id){
      this.atualizar();
      return;
    }

    // this.service.addMusica({
    //   autor: this.autor, musica: this.musica,
    //   id: this.id
    // })
    // .subscribe(_ => this.obterMusica())

    this.service.list().subscribe(musicas => {
      const novoId = musicas.length > 0 ? Math.max(...musicas.map((m: { id: string; }) => m.id)) + 1 : 1;

      const novaMusica = {
        id: novoId,
        autor: this.autor,
        musica: this.musica
      };

      this.service.addMusica(novaMusica).subscribe(() => this.obterMusica());
    });
  }

  atualizar(){
    this.service.editarMusica({ 
      id: parseInt(this.id), autor: this.autor, musica: this.musica
    })
    .subscribe(_ => this.obterMusica())
  }

  preencher(musica: Musicas){
    this.id = musica.id!. toString();
    this.musica = musica.musica;
    this.autor = musica.autor
  }

  remover(id: number){
    this.service.remover(id)
    .subscribe(_ => this.obterMusica)
  }


}
