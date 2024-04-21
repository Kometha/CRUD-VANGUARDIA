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

  constructor(
    private dialogService: DialogService,
    private crudService: CrudVanguardiaService
  ) {
    this.getClientes();
  }

  getClientes() {
    this.crudService.CLIENTES.getClientes().subscribe((res) => {
      if (!res || !res.length) {
        console.log('No hay clientes');
        return;
      }
      this.clientes = res;
    });
  }

  editCliente(cliente: Cliente) {
    this.ref = this.dialogService.open(DialogModalView, {
      header: 'Editar cliente',
      width: '50%',
      closeOnEscape: true,
      data: {
        cliente,
      },
    });

    this.ref.onClose.subscribe(() => {
      this.getClientes();
    });
  }

  deleteCliente(clienteCode: number) {
    this.crudService.CLIENTES.deleteCliente(clienteCode).subscribe((res) => {
      if (!res) {
        console.log('Error al eliminar');
        return;
      }
      this.getClientes();
    });
  }

  newCliente() {
    this.ref = this.dialogService.open(DialogModalView, {
      header: 'Nuevo cliente',
      width: '50%',
      closeOnEscape: true,
    });

    this.ref.onClose.subscribe(() => {
      this.getClientes();
    });
  }
}
