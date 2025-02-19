import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import {
  ButtonSeverity,
  ButtonSize,
  ButtonStyle,
} from '../../models/button-styling.enum';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, TooltipModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Output() clicked = new EventEmitter();
  @Input() severity?: ButtonSeverity = ButtonSeverity.Primary;
  @Input() size: ButtonSize = ButtonSize.Big;
  @Input() isSmall: boolean = false;
  @Input() showBorder: boolean = true;
  @Input() outlined: boolean = false;
  @Input() style?: ButtonStyle;
  @Input() disabled: boolean = false;
  @Input() tooltip?: string;
  @Input() tooltipPosition: string = 'bottom';
  protected classList!: { [key: string]: boolean };

  ngOnInit(): void {
    this.getClassList();
  }

  getClassList(): void {
    this.classList = {
      [`btn--${this.style}`]: !!this.style,
      [`btn--${this.size}`]: !!this.size,
      'btn--no-padding': this.isSmall,
    };
  }

  handleClick($event: Event): void {
    this.clicked.emit($event);
  }
}
