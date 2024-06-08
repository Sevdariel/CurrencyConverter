import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableType } from '../shared/tables/tables.model';
import { TableService } from '../shared/tables/tables.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  public formGroup!: FormGroup;
  public tableTypes = TableType;

  constructor(
    public tableService: TableService,
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      type: new FormControl(TableType.C),
      effectiveDate: new FormControl(formatDate(Date.now(), 'yyyy-MM-dd', 'en')),
    });
  }

  public changeTableType() {
    this.tableService.getTableByDate(
      this.formGroup.controls['type'].value,
      this.formGroup.controls['effectiveDate'].value)
      .subscribe();
  }

  public changeTableDate() {
    this.tableService.getTableByDate(
      this.formGroup.controls['type'].value,
      this.formGroup.controls['effectiveDate'].value)
      .subscribe();
  }
}
