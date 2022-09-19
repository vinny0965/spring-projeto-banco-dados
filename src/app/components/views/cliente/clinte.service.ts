import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agendamento } from '../agendamento/agendamento.model';
import { Endereco } from '../endereco/endereco.model';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClinteService {

   baseUrl: String = environment.baseUrl;

  constructor(private http:HttpClient) { }

  findAllByEndereco(id_end: String):Observable<Cliente[]>{
    const url = `${this.baseUrl}/api/cliente?endereco=${id_end}`
    return this.http.get<Cliente[]>(url)

  }

  findById(id:String):Observable<Cliente>{
    const url = `${this.baseUrl}/api/cliente/id/${id}`
    return this.http.get<Cliente>(url)
  }

  findaAll():Observable<Cliente[]>{
    const url = `${this.baseUrl}/api/clientes`
    return this.http.get<Cliente[]>(url);
  }


  findEndereco(id:String):Observable<Endereco>{
    const url = `${this.baseUrl}/api/endereco/id/${id}`
    return this.http.get<Endereco>(url)
  }

  findAgendamentosByEndereco(id_cli:String):Observable<Agendamento[]>{
    const url = `${this.baseUrl}/api/agendamento?cliente=${id_cli}`
    return this.http.get<Agendamento[]>(url)
  }

  // createCliente(cliente:Cliente,id_end:String){
  //   const url = `${this.baseUrl}/api/cliente/save?idEndereco=${id_end}`
  //   return this.http.post<Cliente>(url, cliente)
  // }

  createCliente(cliente:Cliente){
    const url = `${this.baseUrl}/api/clientes/save`
    return this.http.post<Cliente>(url, cliente)
  }
}
