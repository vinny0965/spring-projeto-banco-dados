import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';


@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.css']
  
})
export class AgendamentoReadComponent implements OnInit {

  agendamentos: Agendamento[] = []
  displayedColumns: string[] = ['id', 'data_agendamento', 'funcionario','cliente','servico','acoes'];
  

  constructor(private service: AgendamentoService,private spinner: NgxSpinnerService, private router:Router) { }

  ngOnInit():void {
    this.findAll();
    this.spinner.show();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta)=>{
      this.agendamentos = resposta
    })
  }
  
  navegarParaAgendamentoCreate():void{
    this.router.navigate(['agendamentos/create']);

  }
  

}
