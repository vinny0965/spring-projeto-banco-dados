import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
    cpf_cnpj:"",
    nome:"",
    telefone:"",
    rg:"",
    funcionarioTipo:"",
    dataAdmissao:"",
    salario:"",
    especialidade:"",
    horarioAgendamento:""
  }

  idEndereco:String = "";

  isLinear = false;
  firstFormGroup =  new FormGroup({});
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  constructor(private _formBuilder: FormBuilder, private service: FuncionarioService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['',Validators.required]
    });
    // this.idEndereco = this.route.snapshot.paramMap.get('id_end')!; 
  }

  // create():void{
  //   this.service.createCliente(this.cliente,this.idEndereco).subscribe((resposta)=>{
  //     this.router.navigate([`enderecos/${this.idEndereco}/clientes`]);

  //   })
  // }
  
  create():void{
    this.service.create(this.funcionario).subscribe((resposta)=>{
      this.router.navigate([`/funcionarios`]);

    })
  }
}
