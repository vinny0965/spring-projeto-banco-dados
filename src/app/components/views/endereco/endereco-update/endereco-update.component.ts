import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-update',
  templateUrl: './endereco-update.component.html',
  styleUrls: ['./endereco-update.component.css']
})
export class EnderecoUpdateComponent implements OnInit {

  endereco: Endereco =  {
    rua: '',
    bairro: '',
    numero: '',
    cep: ''
  }
  constructor(private service: EnderecoService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.endereco.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById():void{
    this.service.findById(this.endereco.id!).subscribe((resposta)=>{
      this.endereco = resposta
    })
  }

  update():void{
    this.service.updateEndereco(this.endereco).subscribe((resposta)=>{
      this.router.navigate(['/enderecos'])
      this.service.mensagem('Endereco atualizado com sucesso!');

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
