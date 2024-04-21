import { HttpErrorResponse } from '@angular/common/http';

export interface HttpErrorResponses<ErrorT = unknown> extends HttpErrorResponse {
  readonly error: ErrorT;
}

export interface APIError {
  statusCode: number;
  message: string;
  error: string;
}
