import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrdemServico } from './ordem-servico.model';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findaAll():Observable<OrdemServico[]>{
    const url = `${this.baseUrl}/api/ordens-servicos`
    return this.http.get<OrdemServico[]>(url);
  }

   findById(id: String):Observable<OrdemServico>{
     const url = `${this.baseUrl}/api/ordens-servicos/id/${id}`
     return this.http.get<OrdemServico>(url)
  }


  update(ordemServico:OrdemServico, idcliente:String, idFuncionario:String,id:String){
    const url = `${this.baseUrl}/api/ordens-servicos/update/id/${id}?idCliente=${idcliente}&idFuncionario=${idFuncionario}`
    return this.http.put<OrdemServico>(url,ordemServico)

  }


  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000
    })
  }

  
}
