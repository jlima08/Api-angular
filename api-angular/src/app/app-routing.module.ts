import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DetalhesComponent } from './testes/detalhes/detalhes.component';
import { LoianeComponent } from './loiHttp/loiane/loiane.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';

const routes: Routes = [


  {
    path: '',
    pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detalhes',
    component: DetalhesComponent,
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'loi',
    component: LoianeComponent
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'datab',
    component: DataBindingComponent,
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'formR',
    component: FormReativoComponent,
   
  },


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
