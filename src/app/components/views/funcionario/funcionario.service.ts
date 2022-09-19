import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  baseUrl: String = environment.baseUrl;

  constructor(private http:HttpClient, private _snack: MatSnackBar) { }

  findaAll():Observable<Funcionario[]>{
    const url = `${this.baseUrl}/api/funcionarios`
    return this.http.get<Funcionario[]>(url);
  }

  findById(id:String):Observable<Funcionario>{
    const url = `${this.baseUrl}/api/funcionarios/id/${id}`
    return this.http.get<Funcionario>(url)
  }

  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/api/funcionarios/delete/id/${id}`
    return this.http.delete<void>(url)
  }

  create(funcionario: Funcionario):Observable<Funcionario>{
    const url = `${this.baseUrl}/api/funcionarios/save`
    return this.http.post<Funcionario>(url,funcionario)
  }


  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000
    })
  }


}
