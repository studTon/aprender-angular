import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  minhaVariavel: string = "Hello world";

  constructor() { }

  ngOnInit(): any {
    return 1;
  }

}
