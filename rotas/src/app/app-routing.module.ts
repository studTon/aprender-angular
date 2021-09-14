import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'cursos/:id', component: CursosDetalheComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
