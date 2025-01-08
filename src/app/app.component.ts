import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent, CriarPensamentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'memoteca';
}
