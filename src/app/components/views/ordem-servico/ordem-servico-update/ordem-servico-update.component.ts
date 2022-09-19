import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdemServico } from '../ordem-servico.model';
import { OrdemServicoService } from '../ordem-servico.service';

@Component({
  selector: 'app-ordem-servico-update',
  templateUrl: './ordem-servico-update.component.html',
  styleUrls: ['./ordem-servico-update.component.css']
})
export class OrdemServicoUpdateComponent implements OnInit {

  isLinear = false;

  ordemServico:OrdemServico = {
    data_entrada:"",
    data_saida:"",
    fk_cliente_id:"",
    fk_funcionario_id:"",
    inscricao_estadual:""
  }

    idCliente:String = "";
    idOrdemServico:String = "";
    idFuncionario:String = "";

  constructor(private router:Router,private route:ActivatedRoute, private service:OrdemServicoService) { }

  ngOnInit(): void {
    this.idOrdemServico = this.route.snapshot.paramMap.get("id")!;
    this.findById();
    

  }

   cancel():void{
     this.router.navigate([`ordens-servicos`]);

   }

  findById():void{
    this.service.findById(this.idOrdemServico).subscribe((resposta)=>{
      this.ordemServico = resposta;
      this.idCliente = this.ordemServico.fk_cliente_id;
      this.idFuncionario = this.ordemServico.fk_funcionario_id;
    })
  }

   update():void{
     this.service.update(this.ordemServico,this.idCliente,this.idFuncionario,this.idOrdemServico).subscribe((resposta)=>{
     this.router.navigate([`ordens-servicos`]);
     this.service.mensagem('ordem servico atualizada com sucesso!');
     },err=>{
       for(let i = 0; i < err.error.errors.length; i++){
         this.service.mensagem(err.error.errors[i] .message)
       }
     });
   }

}
