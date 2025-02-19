import { Component, Input } from '@angular/core';
import { Select } from 'primeng/select';
import { OptionItem } from '../../../core/models/option-item.model';

@Component({
  selector: 'app-dropdown-filter',
  imports: [Select],
  templateUrl: './dropdown-filter.component.html',
  styleUrl: './dropdown-filter.component.scss',
})
export class DropdownFilterComponent {
  @Input() label: string = '';
  @Input() options: OptionItem[] = [];
  @Input() placeholder: string = '';
}
