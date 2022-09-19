import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from '../../agendamento/agendamento.model';
import { Cupom } from '../../cupom/cupon.model';
import { FluxoCaixa } from '../fluxocaixa.model';
import { FluxocaixaService } from '../fluxocaixa.service';

@Component({
  selector: 'app-fluxocaixa-create',
  templateUrl: './fluxocaixa-create.component.html',
  styleUrls: ['./fluxocaixa-create.component.css']
})
export class FluxocaixaCreateComponent implements OnInit {
  isLinear = false;

  fluxocaixa:FluxoCaixa={
    forma_pagamento:"",
    id_agendamento:"",
    id_cupom:"",
    total_pagamento:""
  }

  cupom:Cupom={
    codigo:"",
    id_administrador:"",
    valor:""
  }

  agendamento:Agendamento = {
    data_agendamento:"",
    funcionario:"",
    horario:"",
    id_cliente:"",
    id_servico:""
  }

  idAgendamento:String = ""

  constructor(private _formBuilder : FormBuilder,private router:Router,private service:FluxocaixaService,route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  createFluxoCaixa():void{
    this.fluxocaixa.id_agendamento = this.agendamento.id!;
    this.fluxocaixa.id_cupom = this.cupom.id!;
    this.service.createFluxoCaixa(this.fluxocaixa,this.fluxocaixa.id_agendamento,this.fluxocaixa.id_cupom).subscribe((resposta)=>{
      this.router.navigate(['fluxos-caixa/create/avaliar']);
      console.log(this.fluxocaixa)
    })
  }

  findCupom():void{
    this.service.findCupomPorCodigo(this.cupom.codigo).subscribe((resposta)=>{
      this.cupom = resposta
      console.log(this.cupom)
      this.service.mensagem('Cupom encontrado com sucesso!');

    },err=>{
        this.service.mensagem(err.error.message)
        this.cupom.codigo = "";
        this.cupom.valor = "";
        
    })
  }

  findAgendamento():void{
    this.service.findAgendamentoById(this.idAgendamento).subscribe((resposta)=>{
      this.agendamento = resposta
      console.log(this.agendamento)
      this.service.mensagem('Agendamento encontrado com sucesso!');

    },err=>{
        this.service.mensagem(err.error.message)
        this.cupom.codigo = "";
        this.cupom.valor = "";
        
    })
  }

  navergarParaAvalicao():void{
    this.router.navigate(['fluxos-caixa/create/avaliar'])

  }






}
