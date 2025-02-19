import { Component, computed, signal, WritableSignal } from '@angular/core';
import { ExpandableCardComponent } from '../../../../shared/components/expandable-card/expandable-card.component';
import { CardStyle } from '../../../../shared/models/card-styling.enum';
import {
  ButtonSeverity,
  ButtonStyle,
} from '../../../../shared/models/button-styling.enum';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TableModule } from 'primeng/table';
import {
  FormArray,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PRODUCTS_LIST } from '../../consts/products.const';
import { CurrencyPipe } from '@angular/common';
import { InputNumber } from 'primeng/inputnumber';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-proposal-living-room',
  imports: [
    ExpandableCardComponent,
    ButtonComponent,
    TableModule,
    FormsModule,
    CurrencyPipe,
    InputNumber,
    ReactiveFormsModule,
  ],
  templateUrl: './proposal-living-room.component.html',
  styleUrl: './proposal-living-room.component.scss',
})
export class ProposalLivingRoomComponent {
  qtyFormArray: FormArray<FormControl<number | null>> = new FormArray([
    ...PRODUCTS_LIST.map(() => new FormControl<number | null>(0)),
  ]);
  selectedProducts: WritableSignal<any[]> = signal([]);
  readonly totalPrice = computed(() => {
    const selectedProducts = this.selectedProducts();
    const formValue = this.formValue();
    if (!selectedProducts) return;
    return selectedProducts.reduce((sum: number, product: Product) => {
      const productIndex = this.PRODUCTS.findIndex((p) => p.id === product.id);
      return sum + product.totalPrice * (formValue?.[productIndex] ?? 0);
    }, 0);
  });
  protected readonly CardStyle = CardStyle;
  protected readonly ButtonStyle = ButtonStyle;
  protected readonly ButtonSeverity = ButtonSeverity;
  protected readonly PRODUCTS = PRODUCTS_LIST;
  private readonly formValue = toSignal(this.qtyFormArray.valueChanges);
}
