import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../../../../../backend/componentes/pensamentos/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  standalone: true,
  imports: [PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent {
  [x: string]: any;
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listapensamentos) => {
      this.listaPensamentos = listapensamentos;
    });
  }

  adicionarPensamento() {
    this.router.navigate(['/criarPensamento']);
  }
}
