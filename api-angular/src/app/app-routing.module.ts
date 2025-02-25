import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DetalhesComponent } from './testes/detalhes/detalhes.component';
import { LoianeComponent } from './loiHttp/loiane/loiane.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [
  
    
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
        path: '',
        pathMatch: 'full', redirectTo: 'cursos'
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

      
    ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
