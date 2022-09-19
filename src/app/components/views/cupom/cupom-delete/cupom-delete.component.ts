import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CupomService } from '../cupom.service';
import { Cupom } from '../cupon.model';

@Component({
  selector: 'app-cupom-delete',
  templateUrl: './cupom-delete.component.html',
  styleUrls: ['./cupom-delete.component.css']
})
export class CupomDeleteComponent implements OnInit {
  isLinear = false;

  cupom:Cupom = {
    codigo:"",
    valor:"",
    id_administrador:""
  }
  idCupom:String = ""

  constructor(private router:Router,private route:ActivatedRoute, private service:CupomService) { }



  ngOnInit(): void {
    this.cupom.id_administrador = this.route.snapshot.paramMap.get('id')!;
    this.idCupom = this.route.snapshot.paramMap.get('id_cupom')!;
    this.findById();

  }

  findById():void{
    this.service.findById(this.idCupom).subscribe((resposta)=>{
      this.cupom = resposta;
    })
  }

  cancel():void{
    this.router.navigate([`administradores/id/${this.cupom.id_administrador}/cupons`]);

  }
  
  deleteById():void{
    this.service.deleteById(this.idCupom).subscribe((resposta)=>{
      this.router.navigate([`administradores/id/${this.cupom.id_administrador}/cupons`]);

    })
  }

}
