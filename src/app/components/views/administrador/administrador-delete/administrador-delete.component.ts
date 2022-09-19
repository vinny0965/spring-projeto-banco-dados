import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from '../administrador.model';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-administrador-delete',
  templateUrl: './administrador-delete.component.html',
  styleUrls: ['./administrador-delete.component.css']
})
export class AdministradorDeleteComponent implements OnInit {
  isLinear = false;
  administrador:Administrador = {
    cpf:"",
    data_nascimento:"",
    email:"",
    login:"",
    id_endereco:"",
    nome:"",
    senha:"",
    sexo:"",
    telefone:""
  }

  idAdministrador: String = ""

  constructor(private router:Router,private route:ActivatedRoute, private service:AdministradorService) { }

  ngOnInit(): void {
    this.idAdministrador = this.route.snapshot.paramMap.get('id')!;
    this.findById()
  }
  
  findById():void{
    this.service.findById(this.idAdministrador).subscribe((resposta)=>{
      this.administrador = resposta
    })
  }

  delete():void{
    this.service.delete(this.idAdministrador).subscribe((resposta)=>{
      this.router.navigate([`administradores`]);
      this.service.mensagem("Administrador deletado com sucesso!")

    },err=>{
        err.error.errors; {
         this.service.mensagem("Erro ao deletar: Administrador Vinculado a um servico/cupom")
        }
     });
  }

  cancel():void{
    this.router.navigate([`administradores`]);

  }
}
