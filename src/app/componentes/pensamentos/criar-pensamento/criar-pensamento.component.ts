import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
})
export class CriarPensamentoComponent {
  constructor(private router: Router) {}
  pensamento = {
    id: '1',
    conteudo: 'Apredendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  criarPensamento() {
    alert('Novo pensamento criado!');
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
