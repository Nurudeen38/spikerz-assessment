import { Component, signal, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, MENU_ITEMS, BOTTOM_MENU_ITEMS } from '../../constants/menu.constants';
import { ResponsiveUtil } from '../../utils/responsive.util';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  readonly isCollapsed = signal(false);
  readonly isHovering = signal(false);
  readonly activeMenuIndex = signal(3);
  readonly activeBottomMenuIndex = signal<number | null>(null);

  readonly menuItems: MenuItem[] = MENU_ITEMS;
  readonly bottomMenuItems: MenuItem[] = BOTTOM_MENU_ITEMS;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  @HostListener('mouseenter')
  handleMouseEnter(): void {
    this.onSidebarHover(true);
  }

  @HostListener('mouseleave')
  handleMouseLeave(): void {
    this.onSidebarHover(false);
  }

  get isCollapse(): boolean {
    return this.isCollapsed();
  }
  
  get isHover(): boolean {
    return this.isHovering();
  }

  private checkScreenSize(): void {
    this.isCollapsed.set(ResponsiveUtil.isMobile());
  }

  getIconPath(iconName: string): string {
    return `assets/icons/${iconName}.svg`;
  }

  toggleSidebar(): void {
    this.isCollapsed.update((collapsed) => !collapsed);
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
