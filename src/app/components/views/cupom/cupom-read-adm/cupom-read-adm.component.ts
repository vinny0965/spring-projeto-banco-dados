import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CupomService } from '../cupom.service';
import { Cupom } from '../cupon.model';

@Component({
  selector: 'app-cupom-read-adm',
  templateUrl: './cupom-read-adm.component.html',
  styleUrls: ['./cupom-read-adm.component.css']
})
export class CupomReadAdmComponent implements OnInit {

  cupons:Cupom[]=[];
  displayedColumns: string[] = ['id', 'codigo', 'valor','acoes'];
  idCupom:String = "";

  constructor(private service:CupomService,  private router:Router,private spinner: NgxSpinnerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idCupom = this.route.snapshot.paramMap.get('id')!;
    this.findAllCupons();
  }

  findAllCupons():void{
    this.service.findAllCuponByAdm(this.idCupom).subscribe((resposta)=>{
      this.cupons = resposta;
    })
  }

  navegarParaCupomCreate():void{
    this.router.navigate([`administradores/id/${this.idCupom}/cupons/create`]);

  }

}
