export interface NodeTooltipData {
  type: 'email' | 'server' | 'branch-server';
  title?: string;
  serverName?: string;
  ipAddress?: string;
  documentTitle?: string;
  contentLines?: string[];
  gridNumbers?: string[];
  badges?: { color: string; text: string }[];
}

export const TOOLTIP_DATA_MAP: Record<string, NodeTooltipData> = {
  '1': {
    type: 'email',
    title: 'Lorem Ipsum Dolor Sit',
    gridNumbers: ['1.2.3.4', '1.2.3.4', '1.2.3.4', '1.2.3.4', '1.2.3.4', '1.2.3.4'],
    documentTitle: 'Lorem: 1.2.3.4',
  },
  '2': {
    type: 'server',
    serverName: 'Loremipsu',
    documentTitle: 'Lorem: Loremipsum Loremipsum 1.2.3.4',
    contentLines: ['1.2.3.4 Loremipsum 1.2.3.4 1.2.3.4'],
  },
  '3': {
    type: 'server',
    serverName: 'Loremipsu',
    documentTitle: 'Lorem: Loremipsum Loremipsum 1.2.3.4',
    contentLines: ['1.2.3.4 Loremipsum 1.2.3.4 1.2.3.4'],
  },
  '4': {
    type: 'branch-server',
    serverName: 'Loremipsumdolorsit',
    ipAddress: '192.168.1.1',
    documentTitle: 'Lorem: Lorem "Ipsum"',
    contentLines: ['Loremipsum Lorem 1234,5678'],
  },
  '5': {
    type: 'branch-server',
    serverName: 'Loremipsumdolorsit002',
    ipAddress: '192.168.1.2',
    documentTitle: 'Lorem: Lorem "Ipsum"',
    contentLines: ['Loremipsum Lorem 1234,5678'],
  },
};

export const getTooltipData = (nodeId: string): NodeTooltipData => {
  return TOOLTIP_DATA_MAP[nodeId] || { type: 'server' };
};

