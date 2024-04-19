import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaCrudView } from './views/tabla-crud/tabla-crud.component';
import { DialogModalView } from './views/dialog-modal/dialog-modal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabla-crud',
    pathMatch: 'full',
  },
  {
    path: 'tabla-crud',
    component: TablaCrudView,
  },
  {
    path: 'dialog-modal',
    component: DialogModalView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
