import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Servico } from '../servico.model';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-servico-read-adm',
  templateUrl: './servico-read-adm.component.html',
  styleUrls: ['./servico-read-adm.component.css']
})
export class ServicoReadAdmComponent implements OnInit {
  servicos: Servico[] = [];
  displayedColumns: string[] = ['id', 'tipo_servico', 'valor','acoes'];
  idServico:String = ""

  constructor(private servico: ServicoService, private router:Router,private spinner: NgxSpinnerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idServico = this.route.snapshot.paramMap.get('id')!
    this.findAllServices();

  }

  findAllServices():void{
    this.servico.findAllServicesByAdm(this.idServico).subscribe((resposta)=>{
      this.servicos = resposta;
    })
  }

  navegarParaServicoCreate():void{
    this.router.navigate([`administradores/id/${this.idServico}/servicos/create`]);

  }
}
