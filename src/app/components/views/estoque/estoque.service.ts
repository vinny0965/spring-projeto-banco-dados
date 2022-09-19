import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estoque } from './estoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  baseUrl: String = environment.baseUrl;


  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  findaAll():Observable<Estoque[]>{
    const url = `${this.baseUrl}/api/estoques`
    return this.http.get<Estoque[]>(url);
  }
}
