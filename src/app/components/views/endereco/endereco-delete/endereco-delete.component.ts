import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-delete',
  templateUrl: './endereco-delete.component.html',
  styleUrls: ['./endereco-delete.component.css']
})
export class EnderecoDeleteComponent implements OnInit {
    endereco: Endereco =  {
    id: '',
    rua: '',
    bairro: '',
    numero: '',
    cep: ''
  }
  constructor(private service: EnderecoService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.endereco.id = this.route.snapshot.paramMap.get('id')!
      this.findById()
  }

  cancel():void{
    this.router.navigate(['/enderecos'])
  }

  findById():void{
    this.service.findById(this.endereco.id!).subscribe((resposta)=>{
      this.endereco = resposta
    })
  }

  delete():void{
    this.service.delete(this.endereco.id!).subscribe((resposta)=>{
      this.router.navigate(['/enderecos'])
      this.service.mensagem('endereco deletado com sucesso')

    })
  }

}
