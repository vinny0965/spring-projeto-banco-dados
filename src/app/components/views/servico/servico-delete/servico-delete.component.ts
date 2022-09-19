import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../servico.model';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-servico-delete',
  templateUrl: './servico-delete.component.html',
  styleUrls: ['./servico-delete.component.css']
})
export class ServicoDeleteComponent implements OnInit {
  isLinear = false;

  servico:Servico={
    tipo_servico:"",
    valor:""
  }

  idAdministrador:String = ""
  idServico:String = ""
  constructor(private router:Router,private route:ActivatedRoute, private service:ServicoService) { }

 
  ngOnInit(): void {
    this.idAdministrador = this.route.snapshot.paramMap.get('id')!;
    this,this.idServico = this.route.snapshot.paramMap.get('id_servico')!;
    this.findById();

  }

  findById():void{
    this.service.findServico(this.idServico).subscribe((resposta)=>{
      this.servico = resposta;
    })
  }

  cancel():void{
    this.router.navigate([`administradores/id/${this.idAdministrador}/servicos`]);

  }
  
  deleteById():void{
    this.service.deleteById(this.idServico).subscribe((resposta)=>{
      this.router.navigate([`administradores/id/${this.idAdministrador}/servicos`]);
    },err=>{
       err.error.errors; {
        this.service.mensagem("Erro ao deletar: Serviço Vinculado a um agendamento")
       }
    });
  }


}
