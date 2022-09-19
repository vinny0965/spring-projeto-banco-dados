
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { NgxSpinnerService } from 'ngx-spinner';
import { Agendamento } from '../agendamento/agendamento.model';
import { AgendamentoService } from '../agendamento/agendamento.service';
import { FluxoCaixa } from '../fluxocaixa/fluxocaixa.model';
import { FluxocaixaService } from '../fluxocaixa/fluxocaixa.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {
  fluxoscaixa:FluxoCaixa[] = []

  displayedColumns: string[] = ['id', 'forma_pagamento', 'total_pagamento','id_agendamento','id_cupom'];

  agendamentos: Agendamento[] = []
  displayedColumnsa: string[] = ['id', 'data_agendamento', 'funcionario'];
 
  dataAgendamento:String = "2022-05-16"
 
  @ViewChild('content',{static:false}) el!: ElementRef;

  constructor(private servico: FluxocaixaService, private router:Router,private spinner: NgxSpinnerService, private servicea: AgendamentoService) { }

  ngOnInit(): void {
    this.findAll()
    this.findAllByData()
  }

  printSimplePdf(){
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf"); // will save the file in the current working directory

  }

  printPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save("relatorio.pdf");
      }
    })
  }

  findAll():void{
    this.servico.findAll().subscribe((resposta)=>{
      this.fluxoscaixa = resposta
    })
  }

  findAllByData():void{
    this.servicea.findAllByData(this.dataAgendamento).subscribe((resposta)=>{
      this.agendamentos = resposta
    })
  }
  


}
