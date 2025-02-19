import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  ButtonSeverity,
  ButtonSize,
  ButtonStyle,
} from '../../../../shared/models/button-styling.enum';

@Component({
  selector: 'app-proposal-details-header',
  imports: [ButtonComponent],
  templateUrl: './proposal-details-header.component.html',
  styleUrl: './proposal-details-header.component.scss',
})
export class ProposalDetailsHeaderComponent {
  protected readonly ButtonStyle = ButtonStyle;
  protected readonly ButtonSeverity = ButtonSeverity;
  protected readonly ButtonSize = ButtonSize;
}
