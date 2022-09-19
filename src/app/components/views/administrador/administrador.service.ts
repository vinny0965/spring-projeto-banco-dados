import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrador } from './administrador.model';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  baseUrl: String = environment.baseUrl;


  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  findAll():Observable<Administrador[]>{
    const url = `${this.baseUrl}/api/administradores`
    return this.http.get<Administrador[]>(url);
  }

  create(administrador:Administrador){
    const url = `${this.baseUrl}/api/administrador/save`
    return this.http.post<Administrador>(url, administrador)
  }

  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000
    })
  }

  findById(id: String):Observable<Administrador>{
    const url = `${this.baseUrl}/api/administrador/id/${id}`
    return this.http.get<Administrador>(url)
  }

  delete(id: String):Observable<Administrador>{
    const url = `${this.baseUrl}/api/administrador/delete/id/${id}`
    return this.http.delete<Administrador>(url)
  }
 
}
