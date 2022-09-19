import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cupom } from './cupon.model';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  baseUrl: String = environment.baseUrl;



  constructor(private http:HttpClient, private _snack: MatSnackBar) { }

  findAllCuponByAdm(idAdm:String):Observable<Cupom[]>{
    const url = `${this.baseUrl}/api/cupom?idAdm=${idAdm}`
    return this.http.get<Cupom[]>(url)
  }

  findById(id: String):Observable<Cupom>{
    const url = `${this.baseUrl}/api/cupom/id/${id}`
    return this.http.get<Cupom>(url)
  }

  create(cupom:Cupom,idAdm:String){
    const url = `${this.baseUrl}/api/cupom/save?idAdministrador=${idAdm}`
    return this.http.post<Cupom>(url,cupom)

  }

  update(cupom:Cupom, idCupom:String, idAdm:String){
    const url = `${this.baseUrl}/api/cupom/update/id/${idCupom}?idAdministrador=${idAdm}`
    return this.http.put<Cupom>(url,cupom)

  }

  deleteById(id:String){
    const url = `${this.baseUrl}/api/cupom/delete/id/${id}`
    return this.http.delete<Cupom>(url)
  }

  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000
    })
  }
}
