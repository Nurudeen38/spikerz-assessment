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
        'Lorem: ',
        { text: '1.2.3.4', color: 'purple' }
      ]
    },
  },
  '2': {
    type: 'server-with-ip',
    serverName: 'Loremipsumdolorsit',
    ipAddress: '192.168.1.1',
    hasRedX: true,
    documentTitle: {
      parts: [
        'Lorem: ',
        { text: 'Lorem "Ipsum"', color: 'yellow' }
      ]
    },
    contentLines: [
      {
        parts: [
          'Loremipsum ',
          { text: 'Lorem 1234,5678', color: 'blue' }
        ]
      }
    ],
  },
  '3': {
    type: 'server-with-ip',
    serverName: 'Loremipsumdolorsit002',
    ipAddress: '192.168.1.2',
    hasRedX: true,
    documentTitle: {
      parts: [
        'Lorem: ',
        { text: 'Lorem "Ipsum"', color: 'yellow' }
      ]
    },
    contentLines: [
      {
        parts: [
          'Loremipsum ',
          { text: 'Lorem 1234,5678', color: 'blue' }
        ]
      }
    ],
  },
  '4': {
    type: 'server-simple',
    serverName: 'Loremipsu',
    hasRedX: false,
    documentTitle: {
      parts: [
        'Lorem: Loremipsum Loremipsum ',
        { text: '1.2.3.4', color: 'purple' }
      ]
    },
    contentLines: [
      {
        parts: [
          { text: '1.2.3.4', color: 'purple' },
          ' Loremipsum ',
          { text: '1.2.3.4', color: 'purple' },
          ' ',
          { text: '1.2.3.4', color: 'purple' }
        ]
      }
    ],
  },
  '5': {
    type: 'branch-server',
    serverName: 'Loremipsum',
    hasRedX: false,
    documentTitle: {
      parts: [
        'Lorem: ',
        { text: 'Lorem "Ipsum"', color: 'yellow' },
        ' ',
        { text: 'Lorem', color: 'green' },
        ' Loremipsum Loremipsum'
      ]
    },
    contentLines: [
      {
        parts: [
          { text: '1.2.3.4', color: 'purple' },
          ' Loremipsum ',
          { text: '1.2.3.4', color: 'purple' },
          ' ',
          { text: '1.2.3.4', color: 'purple' },
          ' ',
          { text: 'Lorem 1234,5678', color: 'blue' }
        ]
      },
      {
        parts: [
          'Lorem: ',
          { text: 'Lorem "Ipsum"', color: 'yellow' },
          ' Loremipsum Loremipsum'
        ]
      },
      {
        parts: [
          { text: '1.2.3.4', color: 'purple' },
          ' ',
          { text: '1.2.3.4', color: 'purple' },
          ' Loremipsum Loremipsum ',
          { text: '1.2.3.4', color: 'purple' },
          ' ',
          { text: '1.2.3.4', color: 'purple' }
        ]
      }
    ],
  },
};

export const getTooltipData = (nodeId: string): NodeTooltipData => {
  return TOOLTIP_DATA_MAP[nodeId] || { type: 'server' };
};

