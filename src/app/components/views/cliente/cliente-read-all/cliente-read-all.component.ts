import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClinteService } from '../clinte.service';

@Component({
  selector: 'app-cliente-read-all',
  templateUrl: './cliente-read-all.component.html',
  styleUrls: ['./cliente-read-all.component.css']
})
export class ClienteReadAllComponent implements OnInit {

  displayedColumns: string [] = ["id","nome","cnpj_cpf","rg","tipoCliente","usuarios","veiculos","acoes"];
  id_end:String = ''
  clientes:Cliente[] = []
  

  constructor(private service:ClinteService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id_end = this.route.snapshot.paramMap.get('id_end')!
    this.findAll()
  }

  findAll(){
    this.service.findaAll().subscribe((resposta)=>{
      this.clientes = resposta;
    })
  }


  navegarParaClienteCreate():void{
      this.router.navigate([`enderecos/${this.id_end}/clientes/create`]);
  }
  

}
