import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CupomService } from '../cupom.service';
import { Cupom } from '../cupon.model';

@Component({
  selector: 'app-cupom-update',
  templateUrl: './cupom-update.component.html',
  styleUrls: ['./cupom-update.component.css']
})
export class CupomUpdateComponent implements OnInit {
  isLinear = false;

  cupom:Cupom = {
    codigo:"",
    valor:"",
    id_administrador:""
  }

    idAdministrador:String = "";
    idCupom:String = "";

  constructor(private router:Router,private route:ActivatedRoute, private service:CupomService) { }

  ngOnInit(): void {
    this.idAdministrador = this.route.snapshot.paramMap.get("id")!;
    this.idCupom = this.route.snapshot.paramMap.get("id_cupom")!;
    this.findById();

  }

  cancel():void{
    this.router.navigate([`administradores/id/${this.idAdministrador}/cupons`]);

  }

  findById():void{
    this.service.findById(this.idCupom).subscribe((resposta)=>{
      this.cupom = resposta;
    })
  }

  update():void{
    this.service.update(this.cupom,this.idCupom,this.idAdministrador).subscribe((resposta)=>{
    this.router.navigate([`administradores/id/${this.idAdministrador}/cupons`]);
    this.service.mensagem('Cupom atualizado com sucesso!');
    },err=>{
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i] .message)
      }
    });
  }


}
