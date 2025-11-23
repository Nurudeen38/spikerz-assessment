/**
 * Design tokens constants for consistent spacing, sizing, and breakpoints
 * These values should match CSS custom properties in styles.scss
 */

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1920,
} as const;

export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  '2XL': 40,
  GAP_10: 10,
  GAP_20: 20,
} as const;

export const NODE_DIMENSIONS = {
  RADIUS: 24,
  BADGE_RADIUS: 12,
  ICON_SIZE: 20,
  GAP: 10,
  ARROW_GAP: 10,
} as const;

export const GRAPH_LAYOUT = {
  CENTER_Y: 115,
  START_X: 80,
  BRANCH_OFFSET: 70,
  BASE_SPACING: 160,
  NODE_4_5_OFFSET: 120,
} as const;

export const TOOLTIP_OFFSETS = {
  DEFAULT_X: 50,
  DEFAULT_Y: 50,
  LEFT_OFFSET: 50,
  RIGHT_OFFSET: 250,
  MOBILE_CENTER_OFFSET: 120,
  MOBILE_BRANCH_OFFSET: 260,
} as const;

export const CONTAINER_WIDTHS = {
  TOOLTIP_MAX: 400,
  MOBILE_CENTER_THRESHOLD: 300,
} as const;

