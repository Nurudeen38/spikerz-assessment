import { Injectable, signal, Signal } from '@angular/core';
import { GraphData, GraphNode, PopoverData } from '../types/graph.type';
import { MOCK_GRAPH_DATA, DEFAULT_NODE_DETAILS } from '../constants/graph.constants';

@Injectable({
  providedIn: 'root',
})
export class GraphDataService {
  private readonly _graphData = signal<GraphData | null>(null);
  private readonly _selectedNode = signal<PopoverData | null>(null);
  private readonly _isLoading = signal<boolean>(false);
  public readonly graphData: Signal<GraphData | null> = this._graphData.asReadonly();
  public readonly selectedNode: Signal<PopoverData | null> = this._selectedNode.asReadonly();
  public readonly isLoading: Signal<boolean> = this._isLoading.asReadonly();

  constructor() {
    this.loadGraphData();
    this.setDefaultPopover();
  }

  loadGraphData(): void {
    this._isLoading.set(true);

    setTimeout(() => {
      // Type-safe conversion - MOCK_GRAPH_DATA.nodes already matches GraphNode structure (excluding x/y)
      const nodes: GraphNode[] = MOCK_GRAPH_DATA.nodes.map(node => ({
        id: node.id,
        label: node.label,
        value: node.value,
        ...(node.sublabel && { sublabel: node.sublabel }),
        ...(node.color && { color: node.color }),
        ...(node.icon && { icon: node.icon }),
        ...(node.badge !== undefined && { badge: node.badge }),
        ...(node.status && { status: node.status }),
      }));

      const mockData: GraphData = {
        nodes,
        edges: MOCK_GRAPH_DATA.edges,
      };

      this._graphData.set(mockData);
      this._isLoading.set(false);
    }, 500);
  }

  private setDefaultPopover(): void {
    this._selectedNode.set({
      node: { id: '1', label: 'Default', value: 0 },
      details: DEFAULT_NODE_DETAILS,
      position: { x: 0, y: 0 },
    });
  }

  selectNode(node: GraphNode, position: { x: number; y: number }): void {
    this._selectedNode.set({ 
      node, 
      details: DEFAULT_NODE_DETAILS, 
      position 
    });
  }

  clearSelection(): void {
    // Keep selection persistent - intentionally empty
  }
}
