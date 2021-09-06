import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/1/';
  valorAtual: string = '';
  valorSalvo: string = '';
  
  
  getValor() {
  	return 1;
  }
  
  getCurtirCurso() {
  	return true;
  }
  
  botaoClicado(){
  	alert('Botão clicado!');
  }
  
  onKeyUp(evento: KeyboardEvent) {
  	this.valorAtual = (<HTMLInputElement>evento.target).value;
	
  }
  
  salvarValor(valor){
  	this.valorSalvo = valor;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
