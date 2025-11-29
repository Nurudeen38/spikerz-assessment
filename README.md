# Spikerz (Angular 20.3.6)

A compact dashboard SPA built with Angular 20.3.6, featuring a responsive layout, network graph, node popover, sidebar navigation, and reusable components.

## Features

- **Dashboard**: Collapsible sidebar, responsive main content, graph panel, node popover, and supporting cards.
- **Graph View**: SVG network graph with positioned nodes, edges, and animated branches.
- **Node Popover & Tooltip**: Paginated asset list, donut chart risk visualization, rich tooltips.
- **Data Handling**: Mock graph data via singleton service (`GraphDataService`) using Signals.
- **Responsive UI & Theming**: Tailwind + CSS variables for consistent design.
- **Developer Ergonomics**: Standalone components, Signals, computed state, ESLint, Prettier, Husky.

## Setup

### Prerequisites

- Node.js (LTS)
- Angular CLI (optional)

```sh
git clone <your-repo-url>
cd spikerz
npm install
npm start
# or
ng serve
```

Open [http://localhost:4200/](http://localhost:4200/).

### Build

```sh
npm run build
# or
ng build --configuration production
```

### Testing

```sh
npm test
```

## Scripts

- `start`: ng serve
- `build`: ng build --configuration production
- `test`: ng test
- `lint`: ng lint
- `lint:fix`: ng lint --fix

## Key Files

- App bootstrap: `src/main.ts`
- Root component: `src/app/app.ts`
- Dashboard: `src/app/components/dashboard/dashboard.component.ts`
- Graph view: `src/app/components/graph-view/graph-view.component.ts`
- Node popover: `src/app/components/node-popover/node-popover.component.ts`
- Graph data service: `src/app/services/graph-data.service.ts`
- Styles: `tailwind.config.js`, `src/styles.scss`

## Contributing

- Follow strict TypeScript and Angular linting rules.
- Run linters and formatters before committing.
- Open focused PRs against main.

## Notes

- Uses Angular Signals and computed state.
- Mock data: `src/app/constants/graph.constants.ts`.

## License

For assessment/demo purposes only.