export interface IRate {
    currency: string;
    code: string;
    bid: number;
    ask: number;
    mid: number;
}

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
