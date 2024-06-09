import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { tablesResolver } from './shared/tables/tables.resolver';
import { ConverterComponent } from './converter/converter.component';
import { converterResolver } from './shared/rates/converter.resolver';

export const routes: Routes = [
    {
        path: 'converter',
        component: ConverterComponent,
        resolve: { rates: converterResolver },
    },
    {
        path: '',
        component: MainPageComponent,
        resolve: { table: tablesResolver },
    }
];
