import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CursosService {
  id:any;
  getCursos(){
    let cursos = this.getCursos();
    for(let i=0; i < cursos.length; i++){
      let curso:any = cursos[i];
      if(curso.id == this.id){
        return curso;
      }
    }
    return null;
  }
  constructor() { }
}
