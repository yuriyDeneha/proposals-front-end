import { Component } from '@angular/core';
import { ExpandableCardComponent } from '../../../../shared/components/expandable-card/expandable-card.component';

@Component({
  selector: 'app-proposal-builder',
  imports: [ExpandableCardComponent],
  templateUrl: './proposal-builder.component.html',
  styleUrl: './proposal-builder.component.scss',
})
export class ProposalBuilderComponent {}
