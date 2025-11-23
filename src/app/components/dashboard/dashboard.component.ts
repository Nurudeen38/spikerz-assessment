import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../shared/card/card.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { GraphViewComponent } from '../graph-view/graph-view.component';
import { NodePopoverComponent } from '../node-popover/node-popover.component';
import { CollapsibleCardsComponent } from '../collapsible-cards/collapsible-cards.component';
import { GraphDataService } from '../../services/graph-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CardComponent,
    SidebarComponent, 
    GraphViewComponent, 
    NodePopoverComponent,
    CollapsibleCardsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  readonly graphService: GraphDataService = inject(GraphDataService);
}