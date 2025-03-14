import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Musicas,  } from './musicas';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

   private readonly API = `${environment.API}musicas`;
  
    constructor(private http: HttpClient) { }
  
    list(){ //metodo
      return this.http.get<Musicas[]>(this.API)
      .pipe(
        delay(500),
        tap(console.log)
      );
    }

    addMusica(musica: Musicas ){
      return this.http.post<Musicas>(this.API, musica);
    }

    editarMusica(musica: Musicas){
      return this.http.put<Musicas>(`${this.API}/${musica.id}`, musica);
    }

    remover(id: string){
      console.log('Tentando remover música com ID:', id);
      return this.http.delete<void>(`${this.API}/${id}`);
    }
}
