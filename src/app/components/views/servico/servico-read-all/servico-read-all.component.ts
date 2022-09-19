import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Servico } from '../servico.model';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-servico-read-all',
  templateUrl: './servico-read-all.component.html',
  styleUrls: ['./servico-read-all.component.css']
})
export class ServicoReadAllComponent implements OnInit {

    servicos: Servico[] = [];
    displayedColumns: string[] = ['id', 'tipo_servico', 'valor','acoes'];


  constructor(private servico: ServicoService, private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.findAll();
    this.spinner.show();
  }

  findAll():void{
    this.servico.findAllServices().subscribe((resposta)=>{
      this.servicos = resposta
    })
  }


}
