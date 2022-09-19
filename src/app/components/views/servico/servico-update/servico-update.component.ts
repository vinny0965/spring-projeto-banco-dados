import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../servico.model';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-servico-update',
  templateUrl: './servico-update.component.html',
  styleUrls: ['./servico-update.component.css']
})
export class ServicoUpdateComponent implements OnInit {


  isLinear = false;
  servico:Servico={
    tipo_servico:"",
    valor:"",
    
  }

  idAdministrador:String = "";
  
  idServico = "";


  constructor(private router:Router,private route:ActivatedRoute, private service:ServicoService) { }

  ngOnInit(): void {
    this.idServico = this.route.snapshot.paramMap.get('id_servico')!;
    this.idAdministrador = this.route.snapshot.paramMap.get('id')!;
    this.findById();

  }

  findById():void{
    this.service.findServico(this.idServico).subscribe((resposta)=>{
      this.servico= resposta;
    })
  }

  update():void{
    this.service.update(this.servico,this.idServico,this.idAdministrador).subscribe((resposta)=>{
      this.router.navigate([`administradores/id/${this.idAdministrador}/servicos`]);
      this.service.mensagem('Serviço atualizado com sucesso!');
      },err=>{
        for(let i = 0; i < err.error.errors.length; i++){
          this.service.mensagem(err.error.errors[i] .message)
        }
      });
  }


  cancel():void{
    this.router.navigate([`administradores/id/${this.idAdministrador}/servicos`]);

  }

}
