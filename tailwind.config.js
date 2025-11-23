/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        info: 'var(--color-info)',
        success: 'var(--color-success)',
        critical: 'var(--color-critical)',
        'critical-dark': 'var(--color-critical-dark)',
        gray: {
          25: 'var(--color-gray-soft-25)',
          50: 'var(--color-gray-soft-50)',
          400: 'var(--color-gray-soft-400)',
          500: 'var(--color-gray-soft-500)',
          700: 'var(--color-gray-soft-700)',
        },
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      fontSize: {
        xss: 'var(--font-size-xss)',
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        "base-md": 'var(--font-size-base-md)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
      },
      letterSpacing: {
        '1': 'var(--letter-spacing-1-percent)',
        '400': 'var(--letter-spacing-400)',
      },
      boxShadow: {
        tooltip: 'var(--shadow-tooltip)',
        'card-sm': 'var(--shadow-card-sm)',
        'card-md': 'var(--shadow-card-md)',
      },
      lineHeight: {
        sm: 'var(--line-height-sm)',
        md: 'var(--line-height-md)',
        base: 'var(--line-height-base)',
        lg: 'var(--line-height-lg)',
      },
      width: {
        sidebar: 'var(--sidebar-width)',
        'sidebar-collapsed': 'var(--sidebar-collapsed-width)',
        'asset-list': 'var(--asset-list-width)',
        'risk-summary': 'var(--risk-summary-width)',
        'right-column': 'var(--right-column-width)',
      },
      height: {
        graph: 'var(--graph-height)',
      },
      fontFamily: {
        sans: [
          '"Public Sans"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      }
    },
  },
}