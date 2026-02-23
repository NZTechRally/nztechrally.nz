## Why

The project currently has both ESLint and Prettier installed as dev dependencies, but only Prettier is actively used (via the `lint` script). Consolidating to Biome replaces both tools with a single, faster, zero-config-friendly tool that handles both linting and formatting.

## What Changes

- **BREAKING**: Remove `prettier` dev dependency and `.prettierrc` config file
- **BREAKING**: Remove `eslint` dev dependency (no project-level config exists, so no rules to migrate)
- Add `@biomejs/biome` dev dependency
- Add `biome.json` configuration file
- Update `lint` script in `package.json` to use Biome for both linting and formatting checks
- Add `format` script to `package.json` to apply Biome formatting

## Capabilities

### New Capabilities
- `code-quality-tooling`: Linting and formatting via Biome — covers configuration, npm scripts, and CI-level usage

### Modified Capabilities

_(none — no existing specs)_

## Impact

- `package.json`: dependency changes, updated `lint` script, new `format` script
- `.prettierrc`: deleted
- New file: `biome.json`
- Developer workflow: single `pnpm lint` command for both lint and format checks; `pnpm format` to auto-fix formatting
