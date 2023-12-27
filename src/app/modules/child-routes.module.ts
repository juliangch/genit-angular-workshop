import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './formularios/form/form.component';
import { MainComponent } from './main/main.component';
const childRoutes: Routes = [
  {
    path: '',
    component: FormComponent,
    loadChildren: () => import('./formularios/formularios-reactivos.module').then(m => m.FormularioReactivosModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
  declarations: [
  
    MainComponent
  ]
})
export class ChildRoutesModule { }
