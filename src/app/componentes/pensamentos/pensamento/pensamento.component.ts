import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css',
})
export class PensamentoComponent {
  ngOnInit(): void {}

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love angular!',
    autoria: 'Emanuel',
    modelo: 'modelo3',
  };

  larguraPensamento(): String {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
