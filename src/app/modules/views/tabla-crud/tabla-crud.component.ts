import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogModalView } from '../dialog-modal/dialog-modal.component';
import { CrudVanguardiaService } from '../../services/crud-vanguardia.service';

@Component({
  selector: 'app-tabla-crud',
  templateUrl: './tabla-crud.component.html',
  styleUrl: './tabla-crud.component.scss',
})
export class TablaCrudView {
  ref!: DynamicDialogRef;
  clientes: Cliente[] = [];

  constructor(private dialogService: DialogService, private crudService: CrudVanguardiaService) {
    this.clientes = [
      {
        codigo: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        saldo: 1000,
        activo: true,
      },
      {
        codigo: 2,
        nombre: 'María',
        apellido: 'Gómez',
        saldo: 500,
        activo: false,
      },
      {
        codigo: 3,
        nombre: 'Pedro',
        apellido: 'López',
        saldo: 2000,
        activo: true,
      },
      {
        codigo: 4,
        nombre: 'Ana',
        apellido: 'Martínez',
        saldo: 800,
        activo: false,
      },
      {
        codigo: 5,
        nombre: 'Carlos',
        apellido: 'Rodríguez',
        saldo: 1500,
        activo: true,
      },
    ];
  }

  editCliente(clienteCode: number) {
    this.ref = this.dialogService.open(DialogModalView, {
      header: 'Editar cliente',
      width: '50%',
      closeOnEscape: true,
      data: {
        clienteCode,
      },
    });
  }



  deleteCliente(clienteCode: number) {
    this.crudService.CLIENTES.deleteCliente(clienteCode).subscribe((res) => {
      console.log(res);
    });
  }

  newCliente() {
    this.ref = this.dialogService.open(DialogModalView, {
      header: 'Nuevo cliente',
      width: '50%',
      closeOnEscape: true,
    });
  }
}
