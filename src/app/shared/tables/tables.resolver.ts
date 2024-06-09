import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { ITable, TableType } from "./tables.model";
import { ConverterService } from "./converter.service";

export const tablesResolver: ResolveFn<ITable | unknown> = () => {
    const tableService = inject(ConverterService);

    return tableService.getTable(TableType.C);
}