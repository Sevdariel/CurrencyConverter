import { Component } from '@angular/core';
import { TableService } from '../shared/tables/tables.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  constructor(public tableService: TableService) { }

  public changeTableType(event: Event) {
    this.tableService.getTable((event.target as HTMLSelectElement).value).subscribe();
  }
}
