import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Administrador } from '../administrador.model';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-administrador-read-all',
  templateUrl: './administrador-read-all.component.html',
  styleUrls: ['./administrador-read-all.component.css']
})
export class AdministradorReadAllComponent implements OnInit {

  administradores:Administrador[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'servicos','cupons','acoes'];


  constructor(private service:AdministradorService, private router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((resposta)=>{
      this.administradores = resposta;
    })
  }

  navegarParaAdministradorCreate():void{
    this.router.navigate(['administradores/create'])
  }
}
