import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../servico.model';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.css']
})
export class ServicoReadComponent implements OnInit {

  displayedColumns: string [] = ["id","tipo_servico","valor"];

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  servico: Servico = {
    id:"",
    tipo_servico:"",
    valor:""
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

  home():void{
    this.router.navigate([''])
  }



  constructor(private service:ServicoService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.servico.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void{
    this.service.findServico(this.servico.id!).subscribe((resposta)=>{
      this.servico = resposta
    })
  }




}
