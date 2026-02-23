## 1. Remove legacy tools

- [x] 1.1 Uninstall `eslint` and `prettier` from devDependencies (`pnpm remove eslint prettier`)
- [x] 1.2 Delete `.prettierrc` from the project root

## 2. Install and configure Biome

- [x] 2.1 Install `@biomejs/biome` as a dev dependency (`pnpm add -D @biomejs/biome`)
- [x] 2.2 Create `biome.json` at the project root with linter recommended rules enabled
- [x] 2.3 Set formatter options in `biome.json`: `indentStyle: "space"`, `indentWidth: 2`, `lineWidth: 80`
- [x] 2.4 Set JS formatter options in `biome.json`: `quoteStyle: "double"`, `semicolons: "always"`
- [x] 2.5 Set `files.include` in `biome.json` to `["src/"]`

## 3. Update package.json scripts

- [x] 3.1 Update `lint` script from `prettier src` to `biome check src`
- [x] 3.2 Add `format` script: `biome format --write src`

## 4. Verify and normalise

- [x] 4.1 Run `pnpm format` to apply Biome formatting across `src/` and review the diff
- [ ] 4.2 Commit the formatting-only diff as a separate commit
- [x] 4.3 Run `pnpm lint` and confirm it exits with code `0`
