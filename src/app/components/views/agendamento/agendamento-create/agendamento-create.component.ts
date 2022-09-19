import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';
import { Cliente } from '../../cliente/cliente.model';
import { MatStepperPrevious } from '@angular/material/stepper';
import { Servico } from '../../servico/servico.model';


@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AgendamentoCreateComponent implements OnInit {

  isLinear = false;

  agendamento: Agendamento = {
    data_agendamento:"",
    horario:"",
    funcionario:"",
    id_cliente:"",
    id_servico:""
  }

  cliente: Cliente = {
    nome:"",
    cnpjCpf:"",
    email:"",
    telefone:"",
    id_endereco:"",
    rg:"",
    tipoCliente:"",
    dataEntrada:"",
    dataSaida:"",
    celular:""

    
  }

  servico: Servico ={
    tipo_servico:"",
    valor:""
  }

 
  

  isOptional = false;
  

  constructor(private _formBuilder : FormBuilder,private router:Router,private service:AgendamentoService,route:ActivatedRoute) { }

  ngOnInit() {
    
    
  }

  createAgendamento():void{
    this.agendamento.id_cliente = this.cliente.id!;
    this.agendamento.id_servico = this.servico.id!;
    this.service.createAgendamento(this.agendamento,this.agendamento.id_cliente,this.agendamento.id_servico).subscribe((resposta)=>{
      this.router.navigate(['agendamentos']);
      console.log(this.agendamento)
    })
  }

  findCliente():void{
    this.service.findClientes(this.cliente.cnpjCpf).subscribe((resposta)=>{
      this.cliente = resposta
      console.log(this.cliente)
      this.service.mensagem('Cliente encontrado com sucesso!');

    },err=>{
        this.service.mensagem(err.error.message)
        this.cliente.nome = "";
        this.cliente.telefone = "";
        
    })
  }

  findServico():void{
    this.service.findServico(this.servico.tipo_servico).subscribe((resposta)=>{
      this.servico = resposta
      console.log(this.cliente)
      this.service.mensagem('Serviço encontrado com sucesso!');
    },err=>{
      this.service.mensagem(err.error.message)
      this.servico.tipo_servico = "";
      this.servico.valor = "";

    })

  }

 

  

}
