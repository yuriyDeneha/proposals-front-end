import { Component } from '@angular/core';
import { ProposalDetailsHeaderComponent } from '../proposal-details-header/proposal-details-header.component';
import { TreeNavigationComponent } from '../../../../shared/components/tree-navigation/tree-navigation.component';
import { CATALOG_NAVIGATION_ITEMS } from '../../consts/navigation-items.const';
import { ProposalDetailsFiltersComponent } from '../proposal-details-filters/proposal-details-filters.component';
import { ProposalHistoryComponent } from '../proposal-history/proposal-history.component';
import { ProposalBuilderComponent } from '../proposal-builder/proposal-builder.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonSeverity } from '../../../../shared/models/button-styling.enum';
import { ProposalLivingRoomComponent } from '../proposal-living-room/proposal-living-room.component';

@Component({
  selector: 'app-proposal-details',
  imports: [
    ProposalDetailsHeaderComponent,
    TreeNavigationComponent,
    ProposalDetailsFiltersComponent,
    ProposalHistoryComponent,
    ProposalBuilderComponent,
    ButtonComponent,
    ProposalLivingRoomComponent,
  ],
  templateUrl: './proposal-details.component.html',
  styleUrl: './proposal-details.component.scss',
})
export class ProposalDetailsComponent {
  protected readonly CATALOG_NAVIGATION_ITEMS = CATALOG_NAVIGATION_ITEMS;
  protected readonly ButtonSeverity = ButtonSeverity;
}
