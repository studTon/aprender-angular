import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming',
    rating: 4.6,
    numeroPaginas: 472,
    preco: 189.75,
    dataLancamento: new Date(2018, 11, 4),
    url: 'https://www.amazon.com.br/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507/ref=sr_1_1?adgrpid=81222243317&dchild=1&gclid=CjwKCAjwyvaJBhBpEiwA8d38vNim91at2CD-n0cyh6EKlpkBrlI1LuqiKf7xyEnlCNUgrddd61-CYBoCVH8QAvD_BwE&hvadid=425982570622&hvdev=c&hvlocphy=1001533&hvnetw=g&hvqmt=e&hvrand=4097458899220808469&hvtargid=kwd-300577402523&hydadcr=5629_11235159&keywords=eloquent+javascript&qid=1631473327&sr=8-1&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678'
  };

  livros: string[] = ['Java', 'Angular 2', 'JavaScript'];
  valorAsync:any = new Promise((resolve, reject) =>setTimeout() => resolve('Valor'),2000);
  valorAsync2 = Observable.interval(2000).map(valor => 'Valor assincrono 2');
  filtro: any;
  constructor() { }
  obterCursos(){
    if(this.livros.length === 0 || this.filtro === null || this.filtro.trim() === '')
      return this.livros;

      return this.livros.filter((v) => {
        if(v.toLowerCase().indexOf(this.filtro.toLowerCase())>= 0){
          return true;
        }
        return false;
      })
  }
  addCurso(valor:any){
    this.livros.push(valor);
  }
  ngOnInit(): void {
  }

}
