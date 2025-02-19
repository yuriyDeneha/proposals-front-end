import { Component, Input } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Component({
  selector: 'app-tree-navigation',
  imports: [Tree],
  templateUrl: './tree-navigation.component.html',
  styleUrl: './tree-navigation.component.scss',
})
export class TreeNavigationComponent {
  @Input({ required: true }) navigationItems!: TreeNode[];
  selectedItem?: TreeNode;

  handleNodeSelection({ node }: { node: TreeNode }): void {
    node.expanded = !node.expanded;
  }
}
