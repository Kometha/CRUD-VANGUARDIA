import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header, WEB_SERVICE } from '../../config/config';
import { map, catchError, EMPTY } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';
import { ClienteForm } from '../interfaces/clienteForm.interface';
import { ApiResponse } from '../interfaces/api-response';
import {
  HttpErrorResponses,
  APIError,
} from '../interfaces/Responses.interface';

const headers = new HttpHeaders(Header);

const URL_BASE = `${WEB_SERVICE}crud-vanguardia`;

@Injectable({
  providedIn: 'root',
})
export class CrudVanguardiaService {
  constructor(private http: HttpClient) {}

  private handleError = (error: any) => {
    console.error(error);
    return EMPTY;
  };

  private validateAndReturnResponse = <T>(res: ApiResponse<T>) => {
    const { isSuccess, message, data } = res;

    if (!isSuccess) {
      console.error(message);
      return null;
    }

    return data;
  };

  public readonly CLIENTES = {
    getClientes: () => {
      const url = `${URL_BASE}/clientes`;
      return this.http.get<ApiResponse<Cliente[]>>(url, { headers }).pipe(
        map(({ message, data }) => {
          if (!data) {
            console.error(message);
            return [];
          }
          return data;
        }),
        catchError(this.handleError)
      );
    },
    createCliente: (props: {
      nombre: string;
      apellido: string;
      direccion: string;
      saldo: number;
    }) => {
      const url = `${URL_BASE}/createCliente`;
      const body = { ...props };
      return this.http.post<ApiResponse<Cliente>>(url, body, { headers }).pipe(
        map(({ isSuccess, message, data }) => {
          if (!isSuccess) {
            console.error(message);
            return;
          }
          return data;
        }),
        catchError(this.handleError)
      );
    },
    updateCliente: ({
      id,
      nombre,
      apellido,
      direccion,
      saldo,
      inactivo,
    }: Cliente) => {
      const url = `${URL_BASE}/updateCliente/${id}`;
      const body = { nombre, apellido, direccion, saldo, inactivo };
      return this.http.put<ApiResponse<Cliente>>(url, body, { headers }).pipe(
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
