import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EnderecoReadComponent } from './components/views/endereco/endereco-read/endereco-read.component';
import { EnderecoCreateComponent } from './components/views/endereco/endereco-create/endereco-create.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EnderecoDeleteComponent } from './components/views/endereco/endereco-delete/endereco-delete.component';
import { EnderecoUpdateComponent } from './components/views/endereco/endereco-update/endereco-update.component';
import { ClienteReadAllComponent } from './components/views/cliente/cliente-read-all/cliente-read-all.component';
import { AgendamentoReadComponent } from './components/views/agendamento/agendamento-read/agendamento-read.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendamentoCreateComponent } from './components/views/agendamento/agendamento-create/agendamento-create.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ServicoReadComponent } from './components/views/servico/servico-read/servico-read.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ServicoReadAllComponent } from './components/views/servico/servico-read-all/servico-read-all.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { AdministradorReadAllComponent } from './components/views/administrador/administrador-read-all/administrador-read-all.component';
import { ServicoReadAdmComponent } from './components/views/servico/servico-read-adm/servico-read-adm.component';
import { CupomReadAdmComponent } from './components/views/cupom/cupom-read-adm/cupom-read-adm.component';
import { CupomCreateComponent } from './components/views/cupom/cupom-create/cupom-create.component';
import { CupomUpdateComponent } from './components/views/cupom/cupom-update/cupom-update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CupomDeleteComponent } from './components/views/cupom/cupom-delete/cupom-delete.component';
import { ServicoCreateComponent } from './components/views/servico/servico-create/servico-create.component';
import { ServicoUpdateComponent } from './components/views/servico/servico-update/servico-update.component';
import { ServicoDeleteComponent } from './components/views/servico/servico-delete/servico-delete.component';
import { AdministradorCreateComponent } from './components/views/administrador/administrador-create/administrador-create.component';
import { AdministradorDeleteComponent } from './components/views/administrador/administrador-delete/administrador-delete.component';
import { FluxocaixaReadAllComponent } from './components/views/fluxocaixa/fluxocaixa-read-all/fluxocaixa-read-all.component';
import { FluxocaixaCreateComponent } from './components/views/fluxocaixa/fluxocaixa-create/fluxocaixa-create.component';
import { AvaliacaoComponent } from './components/views/avaliacao/avaliacao.component';
import { RelatoriosComponent } from './components/views/relatorios/relatorios.component';
import { EstoqueComponent } from './components/views/estoque/estoque.component';
import { FuncionarioReadAllComponent } from './components/views/funcionario/funcionario-read-all/funcionario-read-all.component';
import { FuncionarioCreateComponent } from './components/views/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/views/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioReadComponent } from './components/views/funcionario/funcionario-read/funcionario-read.component';
import { VeiculoReadAllComponent } from './components/views/veiculo/veiculo-read-all/veiculo-read-all.component';
import { OrdemServicoReadAllComponent } from './components/views/ordem-servico/ordem-servico-read-all/ordem-servico-read-all.component';
import { OrdemServicoUpdateComponent } from './components/views/ordem-servico/ordem-servico-update/ordem-servico-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EnderecoReadComponent,
    EnderecoCreateComponent,
    EnderecoDeleteComponent,
    EnderecoUpdateComponent,
    ClienteReadAllComponent,
    AgendamentoReadComponent,
    AgendamentoCreateComponent,
    ClienteReadComponent,
    ServicoReadComponent,
    ServicoReadAllComponent,
    ClienteCreateComponent,
    AdministradorReadAllComponent,
    ServicoReadAdmComponent,
    CupomReadAdmComponent,
    CupomCreateComponent,
    CupomUpdateComponent,
    CupomDeleteComponent,
    ServicoCreateComponent,
    ServicoUpdateComponent,
    ServicoDeleteComponent,
    AdministradorCreateComponent,
    AdministradorDeleteComponent,
    FluxocaixaReadAllComponent,
    FluxocaixaCreateComponent,
    AvaliacaoComponent,
    RelatoriosComponent,
    EstoqueComponent,
    FuncionarioReadAllComponent,
    FuncionarioCreateComponent,
    FuncionarioDeleteComponent,
    FuncionarioReadComponent,
    VeiculoReadAllComponent,
    OrdemServicoReadAllComponent,
    OrdemServicoUpdateComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatExpansionModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    NgxSpinnerModule

    
    
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
