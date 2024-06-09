import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { ConverterService } from "../shared/services/converter.service";
import { ITable, TableType } from "../shared/models";

export const tablesResolver: ResolveFn<ITable | unknown> = () => {
    const tableService = inject(ConverterService);

    return tableService.getTable(TableType.C);
}