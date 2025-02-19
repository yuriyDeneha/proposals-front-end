import { Component } from '@angular/core';
import { DropdownFilterComponent } from '../../../../shared/components/dropdown-filter/dropdown-filter.component';
import { SALES_PERSONS_OPTIONS } from '../../consts/sales-persons-options.const';
import { CalendarFilterComponent } from '../../../../shared/components/calendar-filter/calendar-filter.component';
import { ProposalClientFilterComponent } from '../proposal-client-filter/proposal-client-filter.component';
import { ProposalLocationFilterComponent } from '../proposal-location-filter/proposal-location-filter.component';

@Component({
  selector: 'app-proposal-details-filters',
  imports: [
    DropdownFilterComponent,
    CalendarFilterComponent,
    ProposalClientFilterComponent,
    ProposalLocationFilterComponent,
  ],
  templateUrl: './proposal-details-filters.component.html',
  styleUrl: './proposal-details-filters.component.scss',
})
export class ProposalDetailsFiltersComponent {
  protected readonly SALES_PERSONS_OPTIONS = SALES_PERSONS_OPTIONS;
}
