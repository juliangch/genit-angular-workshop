import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'child-routes',
    loadChildren: () => import('./modules/child-routes.module').then(m => m.ChildRoutesModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
