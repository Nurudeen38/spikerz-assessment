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
      const mockData: GraphData = {
        nodes: MOCK_GRAPH_DATA.nodes as GraphNode[],
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
