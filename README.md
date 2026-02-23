# NZ Tech Rally

[![Netlify Status](https://api.netlify.com/api/v1/badges/cb3dfa2a-b76b-4944-b73b-845697e7d3cc/deploy-status)](https://app.netlify.com/sites/nztechrally/deploys)

Website for NZ Tech Rally 2023 and 2025, built with [Eleventy](www.11ty.dev/), and auto deploy on commit to `main` branch via Netlify.

## Project setup

### Prerequisites

- [Node v20+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed globally. Requires admin privilege on your machine
- [pnpm](https://pnpm.io/installation)

### Install project dependencies

```shell
pnpm i
```

## Local development

Build and start local server. Keep this running while working on the project.

```shell
pnpm start
```

Then navigate to [http://localhost:8080/](http://localhost:8080/), to view local version on a browser.

## Code quality

[Biome](https://biomejs.dev/) handles both linting and formatting. A pre-commit hook runs automatically via [Lefthook](https://lefthook.dev/) — commits will be blocked if there are lint or formatting issues.

Check for issues:

```shell
pnpm lint
```

Auto-fix formatting:

```shell
pnpm format
```
