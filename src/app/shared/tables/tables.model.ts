import { IRate } from "../rates/rates.model";

export interface ITable {
    table: string;
    no: string;
    tradingDate: string;
    effectiveDate: string;
    rates: Array<IRate>;
}

export enum TableType {
    A = 'A',
    B = 'B',
    C = 'C',
}