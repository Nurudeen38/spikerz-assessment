import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeTooltipData, HighlightedText, TextHighlight } from '../../constants/tooltip.constants';

@Component({
  selector: 'app-node-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node-tooltip.component.html',
  styleUrls: ['./node-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodeTooltipComponent {
  @Input() data: NodeTooltipData | null = null;
  @Input() position: { x: number; y: number } = { x: 0, y: 0 };


  constructor(){
    console.log(this.data,this.position);
  }

  isHighlightedText(value: string | HighlightedText | undefined): value is HighlightedText {
    return value !== undefined && typeof value === 'object' && 'parts' in value;
  }

  isTextHighlight(part: string | TextHighlight): part is TextHighlight {
    return typeof part === 'object' && 'text' in part && 'color' in part;
  }

  getHighlightClass(color: string): string {
    const colorMap: Record<string, string> = {
      red: 'bg-red-100 text-red-700',
      purple: 'bg-purple-50 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-700',
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-emerald-100 text-emerald-700',
    };
    const base = colorMap[color] || 'bg-gray-100 text-gray-800';
    
    return `${base} py-2 px-1  m-1 rounded-xs font-semibold text-sm inline-block`;
  }
}
