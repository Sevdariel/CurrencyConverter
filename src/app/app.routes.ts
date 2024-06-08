import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { tablesResolver } from './shared/tables/tables.resolver';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        resolve: { table: tablesResolver },
    }
];
