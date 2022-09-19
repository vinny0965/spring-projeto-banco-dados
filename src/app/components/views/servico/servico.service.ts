import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servico } from './servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  baseUrl: String = environment.baseUrl;


  constructor(private http:HttpClient,private _snack: MatSnackBar) { }

  findServico(id:String):Observable<Servico>{
    const url = `${this.baseUrl}/api/servico/id/${id}`
    return this.http.get<Servico>(url)
  }

  findAllServices():Observable<Servico[]>{
    const url = `${this.baseUrl}/api/servicos`
    return this.http.get<Servico[]>(url)
  }

  findAllServicesByAdm(idAdm:String):Observable<Servico[]>{
    const url = `${this.baseUrl}/api/servico?idAdm=${idAdm}`
    return this.http.get<Servico[]>(url)
  }

  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000
    })
  }

  create(servico:Servico,idAdm:String){
    const url = `${this.baseUrl}/api/servico/save?idAdministrador=${idAdm}`
    return this.http.post<Servico>(url,servico)

  }

  
  update(servico:Servico, idServico:String, idAdm:String){
    const url = `${this.baseUrl}/api/servico/update/id/${idServico}?idAdministrador=${idAdm}`
    return this.http.put<Servico>(url,servico);

  }


  deleteById(id:String){
    const url = `${this.baseUrl}/api/servico/delete/id/${id}`
    return this.http.delete<Servico>(url)
  }


}
