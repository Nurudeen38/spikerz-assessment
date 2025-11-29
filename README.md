# Spikerz (Angular 20.3.6)

Overview
This repository contains a small single-page dashboard application built with Angular 20.3.6. The app demonstrates a compact admin-style UI including a network graph, node tooltips, a node details popover, sidebar navigation, and a set of reusable components and utilities.

## Key features
1. Dashboard
- Central layout with a collapsible sidebar and responsive main content.
- Graph panel, node popover, and supporting cards/components.

2. Graph view
- SVG-based network graph with positioned nodes, edges, and animated/branch edges.
- Node hover tooltip and click-to-open popover for node details.

3. Node popover & tooltip
- Paginated asset list with donut chart visualizing risk distribution.
- Rich tooltip rendering with support for highlighted text parts.

4. Data handling & services
- Mock graph data loaded via a singleton service (`GraphDataService`) with Signals-based state.
- Selection state exposed as readonly signals for components to consume.

5. Responsive UI & theming
- Tailwind + custom CSS variables for consistent spacing, colors, and sizes.
- Mobile-first responsive layout and accessible controls.

6. Developer ergonomics
- Standalone components, Signals, and computed derived state.
- ESLint + Prettier + Husky configured for consistent formatting and pre-commit checks.

## Installation & setup

### Prerequisites
- Node.js (Latest LTS recommended)
- Angular CLI (optional if using npm scripts)

Clone the repository
git clone <your-repo-url>
cd spikerz

Install dependencies
npm install

Run (development)
npm start
or
ng serve

Open http://localhost:4200/ to view the app.

Build for production
npm run build
(or)
ng build --configuration production

Testing
Run unit tests:
npm test
End-to-end:
npm run e2e (configure your e2e tool if required)

Scripts (from package.json)
- start: ng serve
- build: ng build --configuration production
- test: ng test
- lint / lint:fix: ng lint

Useful files and entry points
- Root README: [README.md](README.md)
- Project config: [package.json](package.json)
- App bootstrap: [src/main.ts](src/main.ts)
- Root component: [`App`](src/app/app.ts)
- Dashboard: [`DashboardComponent`](src/app/components/dashboard/dashboard.component.ts)
- Graph view: [`GraphViewComponent`](src/app/components/graph-view/graph-view.component.ts)
- Node popover: [`NodePopoverComponent`](src/app/components/node-popover/node-popover.component.ts)
- Graph data service: [`GraphDataService`](src/app/services/graph-data.service.ts)
- Tailwind + styles: [tailwind.config.js](tailwind.config.js), [src/styles.scss](src/styles.scss)

Contributing
- Follow TypeScript strict rules and repository linting config.
- Run linters and formatters before committing (pre-commit hooks enabled).
- Open PRs against main with small, focused changes.

Notes
- The app uses Angular Signals for local state and computed() for derived values.
- Mock data is located under [src/app/constants/graph.constants.ts](src/app/constants/graph.constants.ts).

License
This project is for assessment/demo purposes.