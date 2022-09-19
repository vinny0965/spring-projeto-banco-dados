import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../servico.model';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.css']
})
export class ServicoCreateComponent implements OnInit {
  isLinear = false;

  servico: Servico = {
    tipo_servico:"",
    valor:""
  }

  idAdministrador = ""

  constructor(private router:Router, private route:ActivatedRoute,private service:ServicoService) { }

  ngOnInit(): void {
    this.idAdministrador = this.route.snapshot.paramMap.get('id')!;

  }


  cancel():void{
    this.router.navigate([`administradores/id/${this.idAdministrador}/servicos`]);

  }
  create():void{
    this.service.create(this.servico,this.idAdministrador).subscribe((resposta)=>{
      this.router.navigate([`administradores/id/${this.idAdministrador}/servicos`]);
      this.service.mensagem('Servico cadastrado com sucesso!');
    },err=>{
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i] .message)
      }
    });

  }

}
