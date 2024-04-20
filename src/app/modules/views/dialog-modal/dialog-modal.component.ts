import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ClienteForm } from '../../interfaces/clienteForm.interface';
import { CrudVanguardiaService } from '../../services/crud-vanguardia.service';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss',
})
export class DialogModalView {
  ref!: DynamicDialogRef;

  constructor(private crudService: CrudVanguardiaService) {}

  formCliente: ClienteForm = {
    nombre: '',
    apellido: '',
    direccion: '',
    saldo: 0,
  };

  refresh() {
    this.crudService.CLIENTES.getClients().subscribe((res) => {
      console.log(res);
    });
  }

  saveCliente() {
    this.crudService.CLIENTES.createCliente(this.formCliente).subscribe((res) => {
      console.log(res);
    });
  }
}
