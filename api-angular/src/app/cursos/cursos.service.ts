import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { delay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //variavel sem poder atualizar o valor
  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  list(){ //metodo
    return this.http.get<Curso[]>(this.API)
    
  }
}
