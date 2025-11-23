import { Component, signal } from '@angular/core';
import { CollapsibleCard, COLLAPSIBLE_CARDS } from '../../constants/cards.constants';

@Component({
  selector: 'app-collapsible-cards',
  standalone: true,
  templateUrl: './collapsible-cards.component.html',
  styleUrls: ['./collapsible-cards.component.scss']
})
export class CollapsibleCardsComponent {
  cards = signal<CollapsibleCard[]>(
    COLLAPSIBLE_CARDS.map((card, index) => ({
      ...card,
      expanded: index === 0 // First card expanded by default
    }))
  );

  toggleCard(cardId: string): void {
    this.cards.update(currentCards => 
      currentCards.map(card => 
        card.id === cardId 
          ? { ...card, expanded: !card.expanded }
          : card
      )
    );
  }
}