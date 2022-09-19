import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente/cliente.model';
import { Servico } from '../servico/servico.model';
import { Agendamento } from './agendamento.model';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  baseUrl: String = environment.baseUrl;
  

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  findAll():Observable<Agendamento[]>{
    const url = `${this.baseUrl}/api/agendamentos`
    return this.http.get<Agendamento[]>(url)
  }

  findAllByData(data:String):Observable<Agendamento[]>{
    const url = `${this.baseUrl}/api/agendamento/data?data=${data}`
    return this.http.get<Agendamento[]>(url)
  }

  createAgendamento(agendamento:Agendamento,idCliente:String,idServico:String):Observable<Agendamento>{
    const url = `${this.baseUrl}/api/agendamento/save?idCliente=${idCliente}&idServico=${idServico}`
    return this.http.post<Agendamento>(url,agendamento)
  }

  findClientes(cpf:String):Observable<Cliente>{
    const url = `${this.baseUrl}/api/cliente/cpf/${cpf}`
    return this.http.get<Cliente>(url)
  }

  findServico(servico:String):Observable<Servico>{
    const url = `${this.baseUrl}/api/servico/nome/${servico}`
    return this.http.get<Servico>(url)

  }

  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    })
  }

}
