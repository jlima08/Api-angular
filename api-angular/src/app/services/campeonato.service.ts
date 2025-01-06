import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  private readonly API = 'https://api.api-futebol.com.br/v1'
  

  constructor(private httpClient:HttpClient ) { }

  getTabelaSerieA(): Observable<any>{

    const headers = new HttpHeaders({
      'Authorization': ` Bearer live_94d41279ec7b1abb6d25263c87065e`
    });

    const requestOptions = {headers: headers};

    return this.httpClient.get(`${this.API}/campeonatos/10/tabela`, requestOptions)
    .pipe(
          delay(2000),
          tap(console.log)
        );
    

  }
}
