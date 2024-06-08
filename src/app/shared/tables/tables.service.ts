import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITable } from './tables.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseUrl = 'api/exchangerates/tables'

  constructor(private httpClient: HttpClient) { }

  public getTable(table: string): Observable<ITable> {
    return this.httpClient.get<ITable>(`${this.baseUrl}/${table}`);
  }
}
