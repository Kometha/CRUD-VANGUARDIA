import { Component } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ClienteForm } from '../../interfaces/clienteForm.interface';
import { CrudVanguardiaService } from '../../services/crud-vanguardia.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss',
})
export class DialogModalView {
  cliente!: Cliente;

  formCliente: ClienteForm = {
    nombre: '',
    apellido: '',
    direccion: '',
    saldo: 0,
    inactivo: false,
  };

  constructor(
    private crudService: CrudVanguardiaService,
    private ref: DynamicDialogRef,
    private dynamicDialogConfig: DynamicDialogConfig<{ cliente: Cliente }>
  ) {
    this.cliente = this.dynamicDialogConfig.data?.cliente as Cliente;
    if (this.cliente) {
      this.formCliente = {
        nombre: this.cliente.nombre,
        apellido: this.cliente.apellido,
        direccion: this.cliente.direccion,
        saldo: this.cliente.saldo,
        inactivo: this.cliente.inactivo,
      };
    }
  }

  saveCliente() {
    const { nombre, apellido, direccion, saldo } = this.formCliente;
    // ! Validacion para el form
    if (!nombre || !apellido || !direccion || !saldo) {
      console.log('Faltan datos');
      return;
    }

    if (!nombre) {
      console.log('Falta el nombre');
      return;
    }

    if (!apellido) {
      console.log('Falta el apellido');
      return;
    }

    if (!direccion) {
      console.log('Falta la direccion');
      return;
    }

    if (!saldo) {
      console.log('Falta el saldo');
      return;
    }

    this.crudService.CLIENTES.createCliente({
      nombre,
      apellido,
      direccion,
      saldo,
    }).subscribe((res) => {
      if (!res) {
        console.log('Error al guardar');
        return;
      }
      this.ref.close();
    });
  }

  updateCliente() {
    const { nombre, apellido, direccion, saldo, inactivo } = this.formCliente;
    // ! Validacion para el form
    if (!nombre || !apellido || !direccion || !saldo) {
      console.log('Faltan datos');
      return;
    }

    if (!nombre) {
      console.log('Falta el nombre');
      return;
    }

    if (!apellido) {
      console.log('Falta el apellido');
      return;
    }

    if (!direccion) {
      console.log('Falta la direccion');
      return;
    }

    if (!saldo) {
      console.log('Falta el saldo');
      return;
    }

    this.crudService.CLIENTES.updateCliente({
      id: this.cliente.id,
      nombre,
      apellido,
      direccion,
      saldo,
      inactivo,
    }).subscribe((res) => {
      if (!res) {
        console.log('Error al actualizar');
        return;
      }
      this.ref.close();
    });
  }
}
