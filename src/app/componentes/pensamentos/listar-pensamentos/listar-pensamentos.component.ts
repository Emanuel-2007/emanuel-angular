import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamentos',
  imports: [],
  templateUrl: './listar-pensamentos.component.html',
  styleUrl: './listar-pensamentos.component.css',
})
export class ListarPensamentosComponent {
  listarPensamentos = [];
  listarPensamento: any;

  constructor(private router: Router) {}

  // ngOnInit(): void {
  //   this.service.listar().subscribe((listarPensamento: any) => {
  //     console.log(listarPensamento);
  //     this.listarPensamento = listarPensamento;
  //   });
  // }
  adicionarPensamento() {
    this.router.navigate(['/criarPensamento']);
  }
}
