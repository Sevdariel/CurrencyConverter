import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { ConverterService } from "../tables/converter.service";
import { IRate } from "./rates.model";

export const converterResolver: ResolveFn<Array<IRate> | unknown> = () => {
    const converterService = inject(ConverterService)

    return converterService.getRates();
}