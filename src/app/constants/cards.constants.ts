export interface CardItem {
  label: string;
  sublabel: string;
  info: string;
}

export interface CollapsibleCard {
  id: string;
  title: string;
  items: CardItem[];
  description: string;
  expanded: boolean;
}

export const COLLAPSIBLE_CARDS: Omit<CollapsibleCard, 'expanded'>[] = [
  {
    id: 'card-1',
    title: 'Lorem P',
    items: [
      {
        label: 'Server',
        sublabel: 'Server',
        info: 'Lorem Ipsum Dolor Sit Amet Consectetur.'
      }
    ],
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Nunc Vitae Tortor Convallis Vitae Arcu. Magna.',
  },
  {
    id: 'card-2',
    title: 'Lorem S',
    items: [
      {
        label: 'Server',
        sublabel: 'Server',
        info: 'Lorem Ipsum Dolor Sit Amet Consectetur.'
      }
    ],
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Quis Viverra Etiam Pellentesque Lectus Semper In Massa Purus. Auctor Aenean Aenean Senectus Massa Dignissim Vehicula Mi Erat Purus. Praesent Scelerisque Aliquet Metus Sagittis Dictum Sed Sed. Sed Venenatis Sed Urna Quam.',
  },
  {
    id: 'card-3',
    title: 'Lorem T',
    items: [
      {
        label: 'Server',
        sublabel: 'Server',
        info: 'Lorem Ipsum Dolor Sit Amet Consectetur.'
      }
    ],
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur. In Laoreet Elementum Luctus Odio. Id Enim Urna.',
  }
];




