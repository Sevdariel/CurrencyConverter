import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { mergeMap, tap } from 'rxjs';
import { ITable } from './tables.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseUrl = 'api/exchangerates/tables'
  private sourceTable = signal<ITable | undefined>(undefined);
  public table = this.sourceTable.asReadonly();

  constructor(private httpClient: HttpClient) { }

  public getTable(tableName: string) {
    return this.httpClient.get<Array<ITable>>(`${this.baseUrl}/${tableName}`)
      .pipe(
        mergeMap(table => table),
        tap(table => this.setSourceTable(table)),
      );
  }

  public getTableByDate(tableName: string, date: string) {
    return this.httpClient.get<Array<ITable>>(`${this.baseUrl}/${tableName}/${date}`)
      .pipe(
        mergeMap(table => table),
        tap(table => this.setSourceTable(table)),
      )
  }

  private setSourceTable(table: ITable) {
    this.sourceTable.set(table);
  }
}
