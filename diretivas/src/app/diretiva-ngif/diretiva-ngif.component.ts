import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: any = [];
  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): any{
    return 1;
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
