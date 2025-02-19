import { Component } from '@angular/core';
import { ExpandableCardComponent } from '../../../../shared/components/expandable-card/expandable-card.component';

@Component({
  selector: 'app-proposal-history',
  imports: [ExpandableCardComponent],
  templateUrl: './proposal-history.component.html',
  styleUrl: './proposal-history.component.scss',
})
export class ProposalHistoryComponent {}
