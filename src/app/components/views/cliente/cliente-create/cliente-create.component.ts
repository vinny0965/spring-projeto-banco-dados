import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClinteService } from '../clinte.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  cliente: Cliente = {
    cnpjCpf:"",
    email:"",
    id_endereco:"",
    nome:"",
    telefone:"",
    rg:"",
    tipoCliente:"",
    dataEntrada:"",
    dataSaida:"",
    celular:""
  }

  idEndereco:String = "";

  isLinear = false;
  firstFormGroup =  new FormGroup({});
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  constructor(private _formBuilder: FormBuilder, private service: ClinteService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['',Validators.required]
    });
    this.idEndereco = this.route.snapshot.paramMap.get('id_end')!; 
  }

  // create():void{
  //   this.service.createCliente(this.cliente,this.idEndereco).subscribe((resposta)=>{
  //     this.router.navigate([`enderecos/${this.idEndereco}/clientes`]);

  //   })
  // }
  
  create():void{
    this.service.createCliente(this.cliente).subscribe((resposta)=>{
      this.router.navigate([`/clientes`]);

    })
  }
 

}
