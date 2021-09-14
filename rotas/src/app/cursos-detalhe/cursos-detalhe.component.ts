import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.css']
})
export class CursosDetalheComponent implements OnInit {

  id: any;
  curso: any;

  constructor(private route: ActivatedRoute) { 
    
    this.id = this.route.snapshot.params['id'];
    //this.curso = this.getCursos(this.id)
    if(this.curso == null){
      this.route.routeConfig;
    }
  }

  ngOnInit(): void {
  }

}
