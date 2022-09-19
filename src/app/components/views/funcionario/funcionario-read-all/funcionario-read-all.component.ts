import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-read-all',
  templateUrl: './funcionario-read-all.component.html',
  styleUrls: ['./funcionario-read-all.component.css']
})
export class FuncionarioReadAllComponent implements OnInit {

  displayedColumns: string [] = ["id","nome","cpf_cnpj","rg","funcionarioTipo","usuarios","acoes"];
  id_end:String = ''
  funcionarios:Funcionario[] = []
  

  constructor(private service:FuncionarioService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id_end = this.route.snapshot.paramMap.get('id_end')!
    this.findAll()
  }

  findAll(){
    this.service.findaAll().subscribe((resposta)=>{
      this.funcionarios = resposta;
    })
  }


   navegarParaFuncionarioCreate():void{
       this.router.navigate([`funcionarios/create`]);
   }

}
