import { Component, Input } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-calendar-filter',
  imports: [DatePickerModule],
  templateUrl: './calendar-filter.component.html',
  styleUrl: './calendar-filter.component.scss',
})
export class CalendarFilterComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
}
