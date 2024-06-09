import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { IRate } from "../shared/models";
import { ConverterService } from "../shared/services/converter.service";

export const converterResolver: ResolveFn<Array<IRate> | unknown> = () => {
    const converterService = inject(ConverterService)

    return converterService.getRates();
}