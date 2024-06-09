import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { tablesResolver } from './resolvers/tables.resolver';
import { ConverterComponent } from './converter/converter.component';
import { converterResolver } from './resolvers/converter.resolver';

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
