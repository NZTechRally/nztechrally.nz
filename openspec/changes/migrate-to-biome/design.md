## Context

The project uses Prettier for formatting (`prettier src`) and has ESLint installed but unconfigured at the project level. The `.prettierrc` only sets a JSON parser override for itself — all other formatting uses Prettier's defaults (2-space indent, 80-char line width, double quotes, semicolons). Biome will replace both tools as a single binary with a unified config.

## Goals / Non-Goals

**Goals:**
- Replace `prettier` and `eslint` with `@biomejs/biome`
- Preserve existing formatting behaviour (match Prettier defaults)
- Keep `pnpm lint` as the primary code-quality check command
- Add `pnpm format` for auto-fixing formatting

**Non-Goals:**
- Introducing new lint rules beyond Biome's recommended set
- Configuring Biome for files outside `src/`
- Setting up pre-commit hooks or CI lint steps (none currently exist)
- Editor/IDE integration (optional, left to individual developers)

## Decisions

### Use Biome's recommended ruleset
Biome's `"recommended": true` provides a sensible baseline. Since ESLint had no project config, there are no existing rules to preserve — starting with recommended is clean and appropriate.

### Match Prettier's formatting defaults in `biome.json`
The `.prettierrc` has no custom rules, so Prettier defaults apply. Biome's defaults differ slightly; we'll explicitly configure to match:
- `indentStyle: "space"`, `indentWidth: 2`
- `lineWidth: 80`
- `quoteStyle: "double"` for JS
- `semicolons: "always"`

This avoids a noisy formatting diff on first run.

### Keep scope to `src/`
The current `lint` script targets `src/`. Biome config will specify `src/` as the include path, consistent with the existing workflow.

### Script changes
| Script | Before | After |
|--------|--------|-------|
| `lint` | `prettier src` | `biome check src` |
| `format` | _(none)_ | `biome format --write src` |

`biome check` runs both linting and format-checking together, making `lint` more useful than it was with Prettier alone.

## Risks / Trade-offs

- **Formatting differences** → Biome may reformat some files differently to Prettier even with matched settings. Run `pnpm format` once after install to normalise, and review the diff.
- **ESLint removal** → ESLint was installed but unused. No rules to migrate, so risk is minimal.
- **Biome JS coverage** → Biome lints JS/TS/JSX well but does not lint HTML, Nunjucks (`.njk`), or CSS in the same way. This matches the current state (Prettier only formatted JS/HTML structure, not template logic).

## Migration Plan

1. Install `@biomejs/biome`, remove `eslint` and `prettier`
2. Create `biome.json` with recommended rules and matched formatter settings
3. Delete `.prettierrc`
4. Update `package.json` scripts
5. Run `pnpm format` to apply Biome formatting across `src/` — commit the formatting diff separately for reviewability
6. Run `pnpm lint` to confirm clean output
