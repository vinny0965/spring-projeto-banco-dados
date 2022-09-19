import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-create',
  templateUrl: './endereco-create.component.html',
  styleUrls: ['./endereco-create.component.css']
})
export class EnderecoCreateComponent implements OnInit {

  endereco: Endereco =  {
    rua: '',
    bairro: '',
    numero: '',
    cep: ''
  }

  constructor(private service: EnderecoService,private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.endereco).subscribe((resposta)=>{
      this.router.navigate(['/enderecos'])
      this.service.mensagem('Endereco cadastrado com sucesso!');

    },err=>{
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i] .message)
      }
    })
  }

  cancel():void{
    this.router.navigate(['/enderecos'])
  }
}
