import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from '../administrador.model';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-administrador-create',
  templateUrl: './administrador-create.component.html',
  styleUrls: ['./administrador-create.component.css']
})
export class AdministradorCreateComponent implements OnInit {
  isLinear = false;
  firstFormGroup =  new FormGroup({});
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
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

  constructor(private _formBuilder: FormBuilder, private service: AdministradorService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  create():void{

    this.service.create(this.administrador).subscribe((resposta)=>{
      this.router.navigate(['administradores']);
      this.service.mensagem('Administrador cadastrado com sucesso!');
    },err=>{
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i] .message)
      }
    });
  }

  
}
