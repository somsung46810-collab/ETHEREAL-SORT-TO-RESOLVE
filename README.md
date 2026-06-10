# ETHEREAL SORT TO RESOLVE

A safe, fictional Three.js model-view-projection / clip-space simulation built with Vite.

## Core formula

```txt
RESOLVE = ETHEREAL SORT;
```

## Concept

**ETHEREAL** defines a symbolic render layer where sigils, circuits, runewords, mandala forms, and boolean states are organized into visual systems.

**SORT** performs three operations:

- **Interlink**: connect object nodes to the scene graph.
- **Interject**: insert nodes into the transform pipeline.
- **Interlock**: bind nodes to safety, animation, and MVP validation.

**RESOLVE** projects the sorted scene through a model-view-projection matrix into clip space.

The result is a controlled, non-destructive, fictional street-racing-style simulation with safety overlays and debug visualization.

## Features

- Blue wireframe map/grid layer
- Fictional safe racing vehicles
- Red solid cube safety bounds
- Green dashed rotated checkpoint cubes
- MVP matrix resolution into clip space
- ETHEREAL node system
- SORT resolver system
- Modular scene composition
- Live debug overlay
- Vite development server
- GitHub Actions CI
- GitHub Pages deployment workflow
- No destructive operations

## Project structure

```txt
ETHEREAL-SORT-TO-RESOLVE/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy-pages.yml
├── src/
│   ├── ethereal/
│   │   ├── EtherealNode.js
│   │   └── EtherealSort.js
│   ├── mvp/
│   │   └── MatrixResolver.js
│   ├── scene/
│   │   ├── CityShell.js
│   │   ├── SafetyBounds.js
│   │   └── Checkpoints.js
│   ├── systems/
│   │   ├── AnimationSystem.js
│   │   └── DebugOverlay.js
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run locally

```bash
git clone https://github.com/somsung46810-collab/ETHEREAL-SORT-TO-RESOLVE.git
cd ETHEREAL-SORT-TO-RESOLVE
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Main modules

### `src/ethereal/EtherealNode.js`

Defines the base symbolic node used by the simulation.

### `src/ethereal/EtherealSort.js`

Stores and resolves ETHEREAL nodes using interlink, interject, and interlock-style logic.

### `src/mvp/MatrixResolver.js`

Projects scene objects through the MVP matrix:

```txt
clipPosition = projectionMatrix * viewMatrix * modelMatrix * vertexPosition
```

### `src/scene/CityShell.js`

Creates the blue wireframe city shell.

### `src/scene/SafetyBounds.js`

Creates red solid cube safety bounds.

### `src/scene/Checkpoints.js`

Creates green dashed rotated checkpoint cubes.

### `src/systems/AnimationSystem.js`

Provides stable frame-time progression for animation.

### `src/systems/DebugOverlay.js`

Renders live debug state into the overlay.

## GitHub Pages

This repository includes a GitHub Actions workflow at:

```txt
.github/workflows/deploy-pages.yml
```

To deploy:

1. Open repository settings.
2. Go to **Pages**.
3. Set the source to **GitHub Actions**.
4. Push to `main`.

The Vite base path is configured in `vite.config.js`:

```js
base: '/ETHEREAL-SORT-TO-RESOLVE/'
```

## Safety design

This is a fictional simulation and does not provide real-world racing instructions. The red safety bounds, green transform checkpoints, and debug overlay are symbolic visualization tools used to represent safe rendering, collision awareness, and clip-space validation.

## License

MIT
