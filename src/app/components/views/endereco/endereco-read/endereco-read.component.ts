import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-read',
  templateUrl: './endereco-read.component.html',
  styleUrls: ['./endereco-read.component.css']
})
export class EnderecoReadComponent implements OnInit {

  enderecos: Endereco[] = []

  displayedColumns: string[] = ['id', 'rua', 'bairro', 'numero','cep'];

  constructor(private service: EnderecoService, private router: Router, private spinner: NgxSpinnerService) {

   }

   ngOnInit() {
     this.findAll();
    /** spinner starts on init */
    this.spinner.show();

    //   setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    //  }, 5000);
  }


  findAll(){
    this.service.findaAll().subscribe(resposta =>{
      this.enderecos = resposta;
    
    })
  }

  navegarParaEnderecoCreate(){
      this.router.navigate(["endereco/create"])
  }

}
