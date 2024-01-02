import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './formularios/form/form.component';
import { TableComponent } from './services-apis/table/table.component';
import { TrackListComponent } from './services-apis/track-list/track-list.component';

const childRoutes: Routes = [
  {
    path: 'form',
    component: FormComponent,
    loadChildren: () => import('./formularios/formularios-reactivos.module').then(m => m.FormularioReactivosModule)
  },
  {
    path: 'table',
    component: TableComponent,
    loadChildren: () => import('./services-apis/services-apis.module').then(m => m.ServicesApisModule)
  },
  {
    path: 'track-list',
    component: TrackListComponent,
    loadChildren: () => import('./services-apis/services-apis.module').then(m => m.ServicesApisModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
  declarations: [
    MainComponent,
  ]
})

export class ChildRoutesModule { }
