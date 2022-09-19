import {Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorCreateComponent } from './components/views/administrador/administrador-create/administrador-create.component';
import { AdministradorDeleteComponent } from './components/views/administrador/administrador-delete/administrador-delete.component';
import { AdministradorReadAllComponent } from './components/views/administrador/administrador-read-all/administrador-read-all.component';
import { AgendamentoCreateComponent } from './components/views/agendamento/agendamento-create/agendamento-create.component';
import { AgendamentoReadComponent } from './components/views/agendamento/agendamento-read/agendamento-read.component';
import { AvaliacaoComponent } from './components/views/avaliacao/avaliacao.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteReadAllComponent } from './components/views/cliente/cliente-read-all/cliente-read-all.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import { CupomCreateComponent } from './components/views/cupom/cupom-create/cupom-create.component';
import { CupomDeleteComponent } from './components/views/cupom/cupom-delete/cupom-delete.component';
import { CupomReadAdmComponent } from './components/views/cupom/cupom-read-adm/cupom-read-adm.component';
import { CupomUpdateComponent } from './components/views/cupom/cupom-update/cupom-update.component';
import { EnderecoCreateComponent } from './components/views/endereco/endereco-create/endereco-create.component';
import { EnderecoDeleteComponent } from './components/views/endereco/endereco-delete/endereco-delete.component';
import { EnderecoReadComponent } from './components/views/endereco/endereco-read/endereco-read.component';
import { EnderecoUpdateComponent } from './components/views/endereco/endereco-update/endereco-update.component';
import { EstoqueComponent } from './components/views/estoque/estoque.component';
import { FluxocaixaCreateComponent } from './components/views/fluxocaixa/fluxocaixa-create/fluxocaixa-create.component';
import { FluxocaixaReadAllComponent } from './components/views/fluxocaixa/fluxocaixa-read-all/fluxocaixa-read-all.component';
import { FuncionarioCreateComponent } from './components/views/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/views/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioReadAllComponent } from './components/views/funcionario/funcionario-read-all/funcionario-read-all.component';
import { FuncionarioReadComponent } from './components/views/funcionario/funcionario-read/funcionario-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { OrdemServicoReadAllComponent } from './components/views/ordem-servico/ordem-servico-read-all/ordem-servico-read-all.component';
import { OrdemServicoUpdateComponent } from './components/views/ordem-servico/ordem-servico-update/ordem-servico-update.component';
import { RelatoriosComponent } from './components/views/relatorios/relatorios.component';
import { ServicoCreateComponent } from './components/views/servico/servico-create/servico-create.component';
import { ServicoDeleteComponent } from './components/views/servico/servico-delete/servico-delete.component';
import { ServicoReadAdmComponent } from './components/views/servico/servico-read-adm/servico-read-adm.component';
import { ServicoReadAllComponent } from './components/views/servico/servico-read-all/servico-read-all.component';
import { ServicoReadComponent } from './components/views/servico/servico-read/servico-read.component';
import { ServicoUpdateComponent } from './components/views/servico/servico-update/servico-update.component';
import { VeiculoReadAllComponent } from './components/views/veiculo/veiculo-read-all/veiculo-read-all.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'enderecos',
    component: EnderecoReadComponent

  },
  {
    path:'endereco/create',
    component: EnderecoCreateComponent
  },
  {
    path:'enderecos/delete/id/:id',
    component: EnderecoDeleteComponent
  },
  {
    path:'enderecos/update/id/:id',
    component: EnderecoUpdateComponent
  },
  {
    path:'enderecos/:id_end/clientes',
    component: ClienteReadAllComponent
  },
  {
    path:'agendamentos',
    component: AgendamentoReadComponent
  },
  {
    path:'agendamentos/create',
    component: AgendamentoCreateComponent
  },
  {
    path:'agendamentos/clientes/:id/view',
    component: ClienteReadComponent
  },
  {
    path:'enderecos/:id_end/clientes/id/:id',
    component :ClienteReadComponent
  },
  {
    path:'agendamentos/servicos/:id/view',
    component: ServicoReadComponent
  },
  {
    path:'servicos',
    component:ServicoReadAllComponent
  },
  {
    path:'enderecos/:id_end/clientes/create',
    component:ClienteCreateComponent
  },
  {
    path:'administradores',
    component:AdministradorReadAllComponent
  },
  {
    path:'administradores/id/:id/servicos',
    component:ServicoReadAdmComponent
  },
  {
    path:'administradores/id/:id/cupons',
    component:CupomReadAdmComponent
  },
  {
    path:'administradores/id/:id/cupons/create',
    component:CupomCreateComponent
  },
  {
    path:'administradores/id/:id/cupons/update/id/:id_cupom',
    component:CupomUpdateComponent
  },
  {
    path:'administradores/id/:id/cupons/delete/id/:id_cupom',
    component:CupomDeleteComponent
  },
  {
    path:'administradores/id/:id/servicos/create',
    component:ServicoCreateComponent
  },
  {
    path:'administradores/id/:id/servicos/update/id/:id_servico',
    component:ServicoUpdateComponent

  },
  {
    path:'administradores/id/:id/servicos/delete/id/:id_servico',
    component:ServicoDeleteComponent
  },
  {
    path:'administradores/create',
    component:AdministradorCreateComponent
  },
  {
    path:'administradores/delete/id/:id',
    component:AdministradorDeleteComponent
  },
  {
    path:'fluxos-caixa',
    component:FluxocaixaReadAllComponent

  },
  {
    path:'fluxos-caixa/create',
    component:FluxocaixaCreateComponent
  },
  {
    path:'fluxos-caixa/create/avaliar',
    component:AvaliacaoComponent
  },
  {
    path:'relatorios',
    component:RelatoriosComponent
  },
  {
    path:'estoques',
    component:EstoqueComponent
  },
  {
    path:'clientes',
    component:ClienteReadAllComponent
  },
  {
    path:'clientes/create',
    component:ClienteCreateComponent
  },
  {
    path:'funcionarios',
    component:FuncionarioReadAllComponent
  },
  {
    path:'funcionarios/create',
    component:FuncionarioCreateComponent
  },
  {
    path:'funcionarios/delete/id/:id',
    component: FuncionarioDeleteComponent
  },
  {
    path:'funcionarios/view/id/:id',
    component: FuncionarioReadComponent

  },
  {
    path:'clientes/veiculos/view/id/:id',
    component: VeiculoReadAllComponent
  },
  {
    path:'ordens-servicos',
    component:OrdemServicoReadAllComponent
  },
  {
    path:'ordens-servicos/funcionarios/view/id/:id',
    component:FuncionarioReadComponent
  },
  {
    path:'ordens-servicos/update/id/:id',
    component:OrdemServicoUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
