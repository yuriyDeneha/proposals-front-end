import { Component } from '@angular/core';
import { ProposalDetailsHeaderComponent } from '../proposal-details-header/proposal-details-header.component';

@Component({
  selector: 'app-proposal-details',
  imports: [ProposalDetailsHeaderComponent],
  templateUrl: './proposal-details.component.html',
  styleUrl: './proposal-details.component.scss',
})
export class ProposalDetailsComponent {}
