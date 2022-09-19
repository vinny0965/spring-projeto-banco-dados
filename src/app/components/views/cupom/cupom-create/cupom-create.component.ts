import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CupomService } from '../cupom.service';
import { Cupom } from '../cupon.model';

@Component({
  selector: 'app-cupom-create',
  templateUrl: './cupom-create.component.html',
  styleUrls: ['./cupom-create.component.css']
})
export class CupomCreateComponent implements OnInit {
  isLinear = false;

  cupom:Cupom = {
    codigo:"",
    valor:"",
    id_administrador:""
  }

    idAdministrador:String = "";

  constructor(private router:Router,private route:ActivatedRoute, private service:CupomService) { }

  ngOnInit(): void {
    this.idAdministrador = this.route.snapshot.paramMap.get('id')!;

  }

  cancel():void{
    this.router.navigate([`administradores/id/${this.idAdministrador}/cupons`]);

  }

  create():void{
    this.service.create(this.cupom,this.idAdministrador).subscribe((resposta)=>{
      this.router.navigate([`administradores/id/${this.idAdministrador}/cupons`]);
      this.service.mensagem('Cupom cadastrado com sucesso!');

    },err=>{
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i] .message)
      }
    });

  }

}
