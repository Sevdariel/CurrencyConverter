import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { ITable } from "./tables.model";
import { TableService } from "./tables.service";

export const tablesResolver: ResolveFn<ITable> = (route, state) => {
    const tableService = inject(TableService);

    return tableService.getTable('c');
}