import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crud',
    pathMatch: 'full',
  },
  {
    path: 'crud',
    loadChildren: () =>
      import('./modules/crud.module').then((m) => m.CrudModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
