import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-tabla-crud',
  templateUrl: './tabla-crud.component.html',
  styleUrl: './tabla-crud.component.scss',
})
export class TablaCrudView {
  clientes: Cliente[] = [];

  /*
      const clientes: Cliente[] = [
      { codigo: 1, nombre: 'Juan', apellido: 'Pérez', saldo: 1000, activo: true },
      { codigo: 2, nombre: 'María', apellido: 'Gómez', saldo: 500, activo: false },
      { codigo: 3, nombre: 'Pedro', apellido: 'López', saldo: 2000, activo: true },
      { codigo: 4, nombre: 'Ana', apellido: 'Martínez', saldo: 800, activo: false },
      { codigo: 5, nombre: 'Carlos', apellido: 'Rodríguez', saldo: 1500, activo: true },
    ];
  */
  constructor() {
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
    console.log(`Editando cliente ${clienteCode}`);
  }

  deleteCliente(clienteCode: number) {
    console.log(`Borrando al cliente ${clienteCode}`);
  }
}
