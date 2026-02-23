## ADDED Requirements

### Requirement: Biome is the sole linting and formatting tool
The project SHALL use `@biomejs/biome` as the only tool for linting and code formatting. `eslint` and `prettier` SHALL NOT be present as dependencies.

#### Scenario: Legacy tools removed
- **WHEN** a developer inspects `package.json`
- **THEN** `eslint` and `prettier` SHALL NOT appear in `devDependencies`

#### Scenario: Biome installed
- **WHEN** a developer inspects `package.json`
- **THEN** `@biomejs/biome` SHALL appear in `devDependencies`

#### Scenario: No legacy config files
- **WHEN** a developer inspects the project root
- **THEN** `.prettierrc` SHALL NOT exist

---

### Requirement: Biome configuration file exists
The project SHALL include a `biome.json` at the project root that enables recommended lint rules and configures the formatter to match Prettier's default output.

#### Scenario: Recommended rules enabled
- **WHEN** `biome.json` is read
- **THEN** `linter.enabled` SHALL be `true` and `linter.rules.recommended` SHALL be `true`

#### Scenario: Formatter matches Prettier defaults
- **WHEN** `biome.json` is read
- **THEN** formatter settings SHALL specify `indentStyle: "space"`, `indentWidth: 2`, `lineWidth: 80`

#### Scenario: JS formatter uses double quotes and semicolons
- **WHEN** `biome.json` is read
- **THEN** `javascript.formatter.quoteStyle` SHALL be `"double"` and `javascript.formatter.semicolons` SHALL be `"always"`

#### Scenario: Scope limited to src/
- **WHEN** `biome.json` is read
- **THEN** the included paths SHALL cover `src/` only

---

### Requirement: `pnpm lint` checks linting and formatting
Running `pnpm lint` SHALL execute `biome check` against the `src/` directory, reporting both lint violations and formatting issues without modifying any files.

#### Scenario: Lint passes on clean code
- **WHEN** a developer runs `pnpm lint` on code with no violations
- **THEN** the command SHALL exit with code `0` and report no errors

#### Scenario: Lint fails on lint violation
- **WHEN** a developer runs `pnpm lint` on code with a lint error
- **THEN** the command SHALL exit with a non-zero code and report the violation

#### Scenario: Lint fails on formatting mismatch
- **WHEN** a developer runs `pnpm lint` on incorrectly formatted code
- **THEN** the command SHALL exit with a non-zero code and report the formatting issue

---

### Requirement: `pnpm format` auto-fixes formatting
Running `pnpm format` SHALL execute `biome format --write` against the `src/` directory, applying Biome's formatter in-place.

#### Scenario: Format rewrites files
- **WHEN** a developer runs `pnpm format` on unformatted code
- **THEN** the affected files SHALL be rewritten to match Biome's formatter output

#### Scenario: Format exits cleanly
- **WHEN** a developer runs `pnpm format`
- **THEN** the command SHALL exit with code `0` regardless of how many files were changed
