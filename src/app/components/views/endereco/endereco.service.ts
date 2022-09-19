import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from './endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findaAll():Observable<Endereco[]>{
    const url = `${this.baseUrl}/api/enderecos`
    return this.http.get<Endereco[]>(url);
  }

  create(endereco: Endereco):Observable<Endereco>{
    const url = `${this.baseUrl}/api/enderecos/save`
    return this.http.post<Endereco>(url,endereco)
  }

  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/api/endereco/delete/id/${id}`
    return this.http.delete<void>(url)
  }

  findById(id: String):Observable<Endereco>{
    const url = `${this.baseUrl}/api/endereco/id/${id}`
    return this.http.get<Endereco>(url)
  }

  updateEndereco(endereco: Endereco):Observable<Endereco>{
    const url = `${this.baseUrl}/api/endereco/update/id/${endereco.id}`
    return this.http.put<Endereco>(url,endereco)
  }

  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000
    })
  }


}
