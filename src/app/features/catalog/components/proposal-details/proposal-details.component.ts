import { Component } from '@angular/core';
import { ProposalDetailsHeaderComponent } from '../proposal-details-header/proposal-details-header.component';
import { TreeNavigationComponent } from '../../../../shared/components/tree-navigation/tree-navigation.component';
import { CATALOG_NAVIGATION_ITEMS } from '../../consts/navigation-items.const';

@Component({
  selector: 'app-proposal-details',
  imports: [ProposalDetailsHeaderComponent, TreeNavigationComponent],
  templateUrl: './proposal-details.component.html',
  styleUrl: './proposal-details.component.scss',
})
export class ProposalDetailsComponent {
  protected readonly CATALOG_NAVIGATION_ITEMS = CATALOG_NAVIGATION_ITEMS;
}
