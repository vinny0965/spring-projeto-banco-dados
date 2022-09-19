import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {

  funcionario: Funcionario =  {
    id:"",
    nome:"",
    cpf_cnpj:"",
    dataAdmissao:"",
    especialidade:"",
    funcionarioTipo:"",
    horarioAgendamento:"",
    rg:"",
    salario:"",
    telefone:""
  }
  constructor(private service: FuncionarioService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.funcionario.id = this.route.snapshot.paramMap.get('id')!
      this.findById()
  }

  cancel():void{
    this.router.navigate(['/funcionarios'])
  }

  findById():void{
    this.service.findById(this.funcionario.id!).subscribe((resposta)=>{
      this.funcionario = resposta
    })
  }

  delete():void{
    this.service.delete(this.funcionario.id!).subscribe((resposta)=>{
      this.router.navigate(['/funcionarios'])
      this.service.mensagem('funcionario deletado com sucesso')

    })
  }

}
