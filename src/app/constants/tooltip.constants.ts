export interface TextHighlight {
  text: string;
  color: 'red' | 'purple' | 'yellow' | 'blue' | 'green';
}

export interface HighlightedText {
  parts: (string | TextHighlight)[];
}

export interface NodeTooltipData {
  type: 'email' | 'server' | 'branch-server' | 'server-with-ip' | 'server-simple';
  title?: string | HighlightedText;
  serverName?: string;
  ipAddress?: string;
  documentTitle?: string | HighlightedText;
  contentLines?: (string | HighlightedText)[];
  gridNumbers?: string[];
  badges?: { color: string; text: string }[];
  hasRedX?: boolean; // For server icon with red X overlay
}

export const TOOLTIP_DATA_MAP: Record<string, NodeTooltipData> = {
  '1': {
    type: 'email',
    title: {
      parts: [
        { text: 'Lorem Ipsum Dolor Sit', color: 'red' }
      ]
    },
    gridNumbers: ['1.2.3.4', '1.2.3.4', '1.2.3.4', '1.2.3.4', '1.2.3.4', '1.2.3.4'],
    documentTitle: {
      parts: [
        { text: 'Lorem: 1.2.3.4', color: 'purple' }
      ]
    },
  },
  '2': {
    type: 'server-with-ip',
    serverName: 'Loremipsu',
    hasRedX: true,
    documentTitle: {
      parts: [
        'Lorem: Loremipsum Loremipsum',
        { text: '1.2.3.4', color: 'purple' }
      ]
    },
    contentLines: [
      {
        parts: [
          { text: 'Lorem 1.2.3.4', color: 'blue' },
          'Loremipsum',
          { text: 'Lorem 1.2.3.4', color: 'blue' },
          { text: 'Lorem 1.2.3.4', color: 'blue' }
        ]
      }
    ],
  },
  '3': {
    type: 'server-with-ip',
    serverName: 'Loremipsumdolorsit002',
    hasRedX: true,
    documentTitle: {
      parts: [
        'Lorem: Loremipsum Loremipsum',
        { text: '1.2.3.4', color: 'purple' }
      ]
    },
    contentLines: [
      {
        parts: [
          { text: 'Lorem 1.2.3.4', color: 'blue' },
          'Loremipsum',
          { text: 'Lorem 1.2.3.4', color: 'blue' },
          { text: 'Lorem 1.2.3.4', color: 'blue' }
        ]
      }
    ],
  },
  '4': {
    type: 'server-simple',
    serverName: 'Loremipsu',
    hasRedX: false,
        ipAddress: '192.168.1.2',
    documentTitle: {
      parts: [
        'Lorem:',
        { text: 'Lorem "Ipsum"', color: 'yellow' }
      ]
    },
    contentLines: [
      {
        parts: [
          ' Loremipsum ',
          { text: 'Lorem 1234, 5678', color: 'purple' },
        ]
      }
    ],
  },
  '5': {
    type: 'branch-server',
    serverName: 'Loremipsum',
    hasRedX: true,
    ipAddress: '192.168.1.2',
    documentTitle: {
      parts: [
        'Lorem:',
        { text: 'Lorem "Ipsum"', color: 'yellow' }
      ]
    },
    contentLines: [
      {
        parts: [
          ' Loremipsum ',
          { text: 'Lorem 1234, 5678', color: 'purple' },
        ]
      }
    ],
  },
};

export const getTooltipData = (nodeId: string): NodeTooltipData => {
  return TOOLTIP_DATA_MAP[nodeId] || { type: 'server' };
};

