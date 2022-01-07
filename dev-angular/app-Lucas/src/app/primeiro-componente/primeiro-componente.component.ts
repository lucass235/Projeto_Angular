import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  meuTitulo = "Exibindo dados, atravez de uma variavel";

  texto1 = "Olá, eu sou o texto 1";
  texto2 = "Olá, eu sou o texto 2";

  cliente = {
    id: 1,
    nome: "Lucas"
  }

  clientes = [
    {
      id: 1,
      nome: "Lucas",
      ativo : false
    },
    {
      id: 2,
      nome: "Rhaylene",
      ativo : true
    },
    {
      id: 3,
      nome: "Livia",
      ativo : true
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

geraTexto(){
  return "Teste de retorno de funcao";
}

}
