import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITable } from '../shared/tables/tables.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  private sourceTable = signal<ITable | undefined>(undefined);
  public table = this.sourceTable.asReadonly();

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.data
      .pipe(take(1))
      .subscribe(routeData => {
        const routeTable: ITable = routeData['table'][0];
        this.sourceTable.set(routeTable);
      })

      console.log(this.table())
  }
}
