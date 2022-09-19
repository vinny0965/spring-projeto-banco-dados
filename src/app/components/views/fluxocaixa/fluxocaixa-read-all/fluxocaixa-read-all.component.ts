import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FluxoCaixa } from '../fluxocaixa.model';
import { FluxocaixaService } from '../fluxocaixa.service';

@Component({
  selector: 'app-fluxocaixa-read-all',
  templateUrl: './fluxocaixa-read-all.component.html',
  styleUrls: ['./fluxocaixa-read-all.component.css']
})
export class FluxocaixaReadAllComponent implements OnInit {


  fluxoscaixa:FluxoCaixa[] = []

  displayedColumns: string[] = ['id', 'forma_pagamento', 'total_pagamento','id_agendamento','id_cupom','acoes'];



  constructor(private servico: FluxocaixaService, private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll():void{
    this.servico.findAll().subscribe((resposta)=>{
      this.fluxoscaixa = resposta
    })
  }

  navegarParaFluxoCaixaCreate():void{
    this.router.navigate(['fluxos-caixa/create']);
  }

  

}
