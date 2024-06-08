import { CommonModule, formatDate } from '@angular/common';
import { Component, signal } from '@angular/core';
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

  public midValueExist = signal<boolean>(false);
  public askValueExist = signal<boolean>(false);
  public bidValueExist = signal<boolean>(false);

  constructor(
    public tableService: TableService,
    private formBuilder: FormBuilder,
  ) {

    console.log(this.tableService.table()!.rates.some(rate => !!rate.mid))
    this.formGroup = this.formBuilder.group({
      type: new FormControl(TableType.C),
      effectiveDate: new FormControl(formatDate(Date.now(), 'yyyy-MM-dd', 'en')),
    });

    this.midValueExists();
    this.askValueExists();
    this.bidValueExists();
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

  public midValueExists() {
    return this.midValueExist.set(this.tableService.table()!.rates.some(rate => !!rate.mid))
  }

  public askValueExists() {
    return this.askValueExist.set(this.tableService.table()!.rates.some(rate => !!rate.ask))
  }

  public bidValueExists() {
    return this.bidValueExist.set(this.tableService.table()!.rates.some(rate => !!rate.bid))
  }
}
