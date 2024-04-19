import { NgModule } from '@angular/core';
import { TablaCrudView } from './views/tabla-crud/tabla-crud.component';
import { DialogModalView } from './views/dialog-modal/dialog-modal.component';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud.routing';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    // !Views
    TablaCrudView,
    DialogModalView,
  ],
  imports: [CommonModule, CrudRoutingModule, RouterModule, PrimeNgModule],
})
export class CrudModule {}
