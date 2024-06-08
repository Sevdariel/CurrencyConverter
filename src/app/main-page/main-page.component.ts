import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableService } from '../shared/tables/tables.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  constructor(public tableService: TableService) { }

  public changeTableType(event: Event) {
    this.tableService.getTable((event.target as HTMLSelectElement).value).subscribe();
  }

  public changeTableDate(event: Event) {
    const tableType = (document.getElementById('type') as HTMLSelectElement).value;
    this.tableService.getTableByDate(tableType, (event.target as HTMLInputElement).value).subscribe();
  }
}
