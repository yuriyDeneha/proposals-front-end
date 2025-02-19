import { Component } from '@angular/core';
import { SIDEBAR_ITEMS } from '../../consts/sidebar-items.const';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  protected readonly SIDEBAR_ITEMS = SIDEBAR_ITEMS;
}
