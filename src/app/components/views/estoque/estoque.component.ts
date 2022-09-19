import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Estoque } from './estoque.model';
import { EstoqueService } from './estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  estoques: Estoque[] = []

  displayedColumns: string[] = ['id', 'lote', 'quantidade', 'produto','acoes'];


  constructor(private service: EstoqueService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    this.service.findaAll().subscribe(resposta =>{
      this.estoques = resposta;
    
    })
  }

}
