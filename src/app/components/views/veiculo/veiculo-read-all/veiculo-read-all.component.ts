import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-read-all',
  templateUrl: './veiculo-read-all.component.html',
  styleUrls: ['./veiculo-read-all.component.css']
})
export class VeiculoReadAllComponent implements OnInit {

  veiculos: Veiculo[] = []
  displayedColumns: string[] = ['id', 'modelo', 'marca','placa'];



  veiculo: Veiculo =  {
    id: '',
    modelo:'',
    marca: '',
    placa:'',
    pk_cliente_id:''
  }
  constructor(private service: VeiculoService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.veiculo.pk_cliente_id = this.route.snapshot.paramMap.get('id')!
      this.findById()
  }

  cancel():void{
    this.router.navigate(['/enderecos'])
  }

  findById(){
    this.service.findAgendamentosByCliente(this.veiculo.pk_cliente_id).subscribe((resposta)=>{
      this.veiculos = resposta;
    })
  }

  
}
