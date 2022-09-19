import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agendamento } from '../agendamento/agendamento.model';
import { Cupom } from '../cupom/cupon.model';
import { FluxoCaixa } from './fluxocaixa.model';

@Injectable({
  providedIn: 'root'
})
export class FluxocaixaService {
  baseUrl: String = environment.baseUrl;


  constructor(private http:HttpClient,private _snack: MatSnackBar) { }

  findAll():Observable<FluxoCaixa[]>{
    const url = `${this.baseUrl}/api/fluxos-caixa`
    return this.http.get<FluxoCaixa[]>(url)
  }

  findCupomPorCodigo(codigo:String):Observable<Cupom>{
    const url = `${this.baseUrl}/api/cupom/codigo/${codigo}`
    return this.http.get<Cupom>(url)
  }

  findAgendamentoById(id:String):Observable<Agendamento>{
    const url = `${this.baseUrl}/api/agendamento/id/${id}`
    return this.http.get<Agendamento>(url)
  }

  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    })
  }

  createFluxoCaixa(fluxocaixa:FluxoCaixa,idAgendamento:String,idCupom:String):Observable<FluxoCaixa>{
    const url = `${this.baseUrl}/api/fluxos-caixa/create?idAgendamento=${idAgendamento}&idCupom=${idCupom}`
    return this.http.post<FluxoCaixa>(url,fluxocaixa)
  }
}
