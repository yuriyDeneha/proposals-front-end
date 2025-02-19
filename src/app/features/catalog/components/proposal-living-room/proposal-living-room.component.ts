import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { ExpandableCardComponent } from '../../../../shared/components/expandable-card/expandable-card.component';
import { CardStyle } from '../../../../shared/models/card-styling.enum';
import {
  ButtonSeverity,
  ButtonStyle,
} from '../../../../shared/models/button-styling.enum';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { PRODUCTS_LIST } from '../../consts/products.const';
import { CurrencyPipe } from '@angular/common';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'app-proposal-living-room',
  imports: [
    ExpandableCardComponent,
    ButtonComponent,
    TableModule,
    FormsModule,
    CurrencyPipe,
    InputNumber,
  ],
  templateUrl: './proposal-living-room.component.html',
  styleUrl: './proposal-living-room.component.scss',
})
export class ProposalLivingRoomComponent {
  selectedProducts: WritableSignal<any[]> = signal([]);
  protected readonly CardStyle = CardStyle;
  protected readonly ButtonStyle = ButtonStyle;
  protected readonly ButtonSeverity = ButtonSeverity;
  protected readonly PRODUCTS = PRODUCTS_LIST;
}
