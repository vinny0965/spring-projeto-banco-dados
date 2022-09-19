import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Cliente } from '../../cliente/cliente.model';
import { OrdemServico } from '../ordem-servico.model';
import { OrdemServicoService } from '../ordem-servico.service';

@Component({
  selector: 'app-ordem-servico-read-all',
  templateUrl: './ordem-servico-read-all.component.html',
  styleUrls: ['./ordem-servico-read-all.component.css']
})
export class OrdemServicoReadAllComponent implements OnInit {

  ordensServicos: OrdemServico[] = []


  displayedColumns: string[] = ['id', 'data_entrada', 'data_saida', 'inscricao_estadual','fk_cliente_id','fk_funcionario_id','usuarios','veiculos','acoes'];

  constructor(private service: OrdemServicoService, private router: Router, private spinner: NgxSpinnerService) {

   }

   ngOnInit() {
     this.findAll();
    /** spinner starts on init */
    this.spinner.show();

    //   setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    //  }, 5000);
  }


  findAll(){
    this.service.findaAll().subscribe(resposta =>{
      this.ordensServicos = resposta;
    
    })
  }

  navegarParaEnderecoCreate(){
      this.router.navigate(["endereco/create"])
  }
}
