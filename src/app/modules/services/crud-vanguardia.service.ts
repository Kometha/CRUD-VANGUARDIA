import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header, WEB_SERVICE } from '../../config/config';
import { map, catchError, EMPTY } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';
import { ClienteForm } from '../interfaces/clienteForm.interface';

const headers = new HttpHeaders(Header);

const URL_BASE = `${WEB_SERVICE}crud-vanguardia`;

@Injectable({
  providedIn: 'root',
})
export class CrudVanguardiaService {
  constructor(private http: HttpClient) {}

  private handleError = (err: { error: { message: string } }): typeof EMPTY => {
    const message: string = err?.error?.message ?? 'Error desconocido';
    console.error(message);
    return EMPTY;
  };

  CLIENTES = {
    getClients: () => {
      return this.http.get<Cliente[]>(`${URL_BASE}/clientes`, { headers }).pipe(
        map((res) => res),
        catchError(this.handleError)
      );
    },
    createCliente: (clienteNew: ClienteForm) => {
      return this.http
        .post<Cliente>(`${URL_BASE}/createCliente`, clienteNew, { headers })
        .pipe(
          map((res) => res),
          catchError(this.handleError)
        );
    },
    updateCliente: (clienteUpdate: ClienteForm) => {
      return this.http
        .post<Cliente>(`${URL_BASE}/updateCliente`, clienteUpdate, { headers })
        .pipe(
          map((res) => res),
          catchError(this.handleError)
        );
    },
    deleteCliente: (clienteCode: number) => {
      return this.http
        .delete<Cliente>(`${URL_BASE}/deleteCliente/${clienteCode}`, {
          headers,
        })
        .pipe(
          map((res) => res),
          catchError(this.handleError)
        );
    },
  };
}

