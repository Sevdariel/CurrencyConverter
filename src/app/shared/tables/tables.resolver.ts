import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { ITable, TableType } from "./tables.model";
import { TableService } from "./tables.service";

export const tablesResolver: ResolveFn<ITable | unknown> = () => {
    const tableService = inject(TableService);

    return tableService.getTable(TableType.C);
}