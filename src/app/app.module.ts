import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import bootstrap from '../main.server';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    AppComponent,
    RouterModule.forRoot([]),
  ],
  providers: [],
})
export class AppModule {}
