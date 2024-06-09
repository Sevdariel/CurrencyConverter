import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConverterService } from '../shared/tables/converter.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent implements OnInit {

  public formGroup!: FormGroup;
  private afterConvertSource = signal<number>(0);
  public afterConvert = this.afterConvertSource.asReadonly();

  constructor(
    public converterService: ConverterService,
    private formBuilder: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstCurrency: new FormControl(""),
      amount: new FormControl(0),
      secondCurrency: new FormControl(""),
    });
  }

  public change(event: Event) {
    console.log(event)
  }

  public convert() {
    const firstCurrency = this.converterService.rates()?.find(rate => rate.code === this.formGroup.controls['firstCurrency'].value);
    const secondCurrency = this.converterService.rates()?.find(rate => rate.code === this.formGroup.controls['secondCurrency'].value);
    const amount = this.formGroup.controls['amount'].value;

    const exchangeRate = firstCurrency!.mid / secondCurrency!.mid;

    this.afterConvertSource.set(exchangeRate * amount);
  }
}
