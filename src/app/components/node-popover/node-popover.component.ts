import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphDataService } from '../../services/graph-data.service';

@Component({
  selector: 'app-node-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node-popover.component.html',
  styleUrls: ['./node-popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodePopoverComponent {
  private readonly graphService = inject(GraphDataService);

  readonly popoverData = this.graphService.selectedNode;
  readonly currentPage = signal(1);
  readonly pageSize = 2;
  
  // Constants for donut chart calculations
  private readonly DONUT_RADIUS = 50;
  private readonly CIRCUMFERENCE = 2 * Math.PI * 50; // ~314.159

  readonly paginatedAssets = computed(() => {
    const data = this.popoverData();
    if (!data) return [];

    const page = this.currentPage();
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    const result = data.details.assets.slice(start, end);

    return result;
  });

  readonly totalPages = computed(() => {
    const data = this.popoverData();
    if (!data) return 0;
    return Math.ceil(data.details.assets.length / this.pageSize);
  });
  
  // Expose Math methods as component methods for template use
  readonly ceil = Math.ceil;
  readonly floor = Math.floor;
  readonly min = Math.min;

  readonly currentPageRiskSummary = computed(() => {
    const assets = this.paginatedAssets();

    const summary = {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    };

    assets.forEach((asset) => {
      const level = asset.riskLevel;
      if (level === 'Critical') summary.critical++;
      else if (level === 'High') summary.high++;
      else if (level === 'Medium') summary.medium++;
      else if (level === 'Low') summary.low++;
    });

    return summary;
  });

  nextPage(): void {
    const current = this.currentPage();
    const total = this.totalPages();

    if (current < total) {
      this.currentPage.set(current + 1);
    }
  }

  prevPage(): void {
    const current = this.currentPage();

    if (current > 1) {
      this.currentPage.set(current - 1);
    }
  }

  // Donut chart calculations
  private getCircumference(): number {
    return this.CIRCUMFERENCE;
  }

  private getTotalRisks(): number {
    const summary = this.currentPageRiskSummary();
    return summary.critical + summary.high + summary.medium + summary.low;
  }
  
  private calculateDashArray(count: number, total: number): string {
    if (total === 0 || count === 0) {
      return `0 ${this.CIRCUMFERENCE}`;
    }
    
    const circumference = this.getCircumference();
    const segmentLength = (count / total) * circumference;
    return `${segmentLength} ${circumference - segmentLength}`;
  }

  // Get stroke-dasharray for each segment (segmentLength, remainingCircumference)
  getCriticalDashArray(): string {
    const summary = this.currentPageRiskSummary();
    const total = this.getTotalRisks();
    return this.calculateDashArray(summary.critical, total);
  }

  getHighDashArray(): string {
    const summary = this.currentPageRiskSummary();
    const total = this.getTotalRisks();
    return this.calculateDashArray(summary.high, total);
  }

  getMediumDashArray(): string {
    const summary = this.currentPageRiskSummary();
    const total = this.getTotalRisks();
    return this.calculateDashArray(summary.medium, total);
  }

  getLowDashArray(): string {
    const summary = this.currentPageRiskSummary();
    const total = this.getTotalRisks();
    return this.calculateDashArray(summary.low, total);
  }

  // Get stroke-dashoffset to position each segment
  getCriticalDashOffset(): number {
    return 0;
  }

  private calculateDashOffset(...percentages: number[]): number {
    const total = this.getTotalRisks();
    if (total === 0) return 0;

    const circumference = this.getCircumference();
    const cumulativePercentage = percentages.reduce((sum, pct) => sum + pct, 0);
    return -(circumference * cumulativePercentage);
  }

  getHighDashOffset(): number {
    const summary = this.currentPageRiskSummary();
    const total = this.getTotalRisks();
    if (total === 0) return 0;
    return this.calculateDashOffset(summary.critical / total);
  }

  getMediumDashOffset(): number {
    const summary = this.currentPageRiskSummary();
    const total = this.getTotalRisks();
    if (total === 0) return 0;
    return this.calculateDashOffset(
      summary.critical / total,
      summary.high / total
    );
  }

  getLowDashOffset(): number {
    const summary = this.currentPageRiskSummary();
    const total = this.getTotalRisks();
    if (total === 0) return 0;
    return this.calculateDashOffset(
      summary.critical / total,
      summary.high / total,
      summary.medium / total
    );
  }
}
