import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from '../../agendamento/agendamento.model';
import { Endereco } from '../../endereco/endereco.model';
import { Cliente } from '../cliente.model';
import { ClinteService } from '../clinte.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  displayedColumns: string [] = ["id","data_agendamento","funcionario"];

  agendamentos: Agendamento[] = []
  cliente: Cliente = {
    id:"",
    nome: "",
    email:"",
    telefone:"",
    id_endereco:"",
    cnpjCpf:"",
    tipoCliente:"",
    rg:"",
    dataEntrada:"",
    dataSaida:"",
    celular:""
   
  }

  

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  cancel():void{
    this.router.navigate(['/agendamentos'])
  }
  

  constructor(private service: ClinteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
    this.findAll()
   

  }

  findById():void{
    this.service.findById(this.cliente.id!).subscribe((resposta)=>{
      this.cliente=resposta
    })
  }

  findAll():void{
    this.service.findAgendamentosByEndereco(this.cliente.id!).subscribe((resposta)=>{
      this.agendamentos = resposta
    })
  }

  

  


}
