import { Component, signal, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, MENU_ITEMS, BOTTOM_MENU_ITEMS } from '../../constants/menu.constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed = signal(false);
  isHovering = signal(false); // Added this signal
  activeMenuIndex = signal(3);
  activeBottomMenuIndex = signal<number | null>(null);

  menuItems: MenuItem[] = MENU_ITEMS;
  bottomMenuItems: MenuItem[] = BOTTOM_MENU_ITEMS;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const isMobile = window.innerWidth <= 768;
    this.isCollapsed.set(isMobile);
  }

  getIconPath(iconName: string): string {
    return `assets/icons/${iconName}.svg`;
  }

  toggleSidebar(): void {
    this.isCollapsed.update(collapsed => !collapsed);
  }

  onSidebarHover(hovering: boolean): void {
    this.isHovering.set(hovering);
  }

  selectMenuItem(index: number): void {
    this.activeMenuIndex.set(index);
    this.activeBottomMenuIndex.set(null);
  }

  selectBottomMenuItem(index: number): void {
    this.activeBottomMenuIndex.set(index);
    this.activeMenuIndex.set(-1);
  }
}