import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { tablesResolver } from './shared/tables/tables.resolver';
import { ConverterComponent } from './converter/converter.component';

export const routes: Routes = [
    {
        path: 'converter',
        component: ConverterComponent,
    },
    {
        path: '',
        component: MainPageComponent,
        resolve: { table: tablesResolver },
    }
];
