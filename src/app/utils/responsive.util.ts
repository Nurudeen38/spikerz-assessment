/**
 * Responsive utility functions for consistent breakpoint usage
 * These values match CSS custom properties and breakpoint tokens
 */

import { BREAKPOINTS } from '../constants/design-tokens.constants';

export class ResponsiveUtil {
  /**
   * Check if current window width matches mobile breakpoint
   */
  static isMobile(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= BREAKPOINTS.MD;
  }

  /**
   * Check if current window width matches tablet breakpoint
   */
  static isTablet(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth > BREAKPOINTS.MD && window.innerWidth <= BREAKPOINTS.LG;
  }

  /**
   * Check if current window width matches desktop breakpoint
   */
  static isDesktop(): boolean {
    if (typeof window === 'undefined') return true;
    return window.innerWidth > BREAKPOINTS.LG;
  }

  /**
   * Get current window width safely
   */
  static getWindowWidth(): number {
    if (typeof window === 'undefined') return BREAKPOINTS.LG;
    return window.innerWidth;
  }
}
