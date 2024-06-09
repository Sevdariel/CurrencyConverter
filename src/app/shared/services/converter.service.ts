import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { forkJoin, mergeMap, tap } from 'rxjs';
import { IRate, ITable } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private baseUrl = 'api/exchangerates/tables'
  private sourceTable = signal<ITable | undefined>(undefined);
  public table = this.sourceTable.asReadonly();

  private sourceRates = signal<Array<IRate> | undefined>(undefined);
  public rates = this.sourceRates.asReadonly();

  constructor(private httpClient: HttpClient) { }

  public getRates() {
    return forkJoin([this.getTable('a'), this.getTable('b'), this.getTable('c')])
      .pipe(
        tap(res => this.setSourceRates(res)),
      )
  }

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

  public getTodayTable(tableName: string) {
    return this.httpClient.get<Array<ITable>>(`${this.baseUrl}/${tableName}/today`)

  }

  private setSourceTable(table: ITable) {
    this.sourceTable.set(table);
  }

  private setSourceRates(tables: Array<ITable>) {
    this.sourceRates.set(tables.flatMap(table => table.rates).filter(rate => !!rate.mid));
  }
}
