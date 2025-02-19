import { Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { CardStyle } from '../../models/card-styling.enum';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-expandable-card',
  imports: [PanelModule, NgClass],
  templateUrl: './expandable-card.component.html',
  styleUrl: './expandable-card.component.scss',
})
export class ExpandableCardComponent {
  @Input() title: string = '';
  @Input() isCustomHeader = false;
  @Input() style: CardStyle = CardStyle.Grey;
  @Input() isCollapsed = true;
  protected readonly CardStyle = CardStyle;
}
