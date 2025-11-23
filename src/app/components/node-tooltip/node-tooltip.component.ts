import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeTooltipData } from '../../constants/tooltip.constants';

@Component({
  selector: 'app-node-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node-tooltip.component.html',
  styleUrls: ['./node-tooltip.component.scss'],
})
export class NodeTooltipComponent {
  @Input() data: NodeTooltipData | null = null;
  @Input() position: { x: number; y: number } = { x: 0, y: 0 };
}
