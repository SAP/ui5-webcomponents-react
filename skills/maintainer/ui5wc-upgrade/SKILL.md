---
name: ui5wc-upgrade
description: Guide a complete UI5 Web Components version upgrade in the ui5-webcomponents-react monorepo. Updates root and peer dependencies, regenerates wrapper components, syncs theming parameters, updates version-info, detects new components and breaking changes, and verifies the build. Use when a new @ui5/webcomponents version is released and the monorepo needs upgrading.
disable-model-invocation: true
argument-hint: target version (e.g. 2.22.0)
allowed-tools:
  - Bash(node skills/maintainer/ui5wc-upgrade/scripts/verify-peer-deps.mjs*)
  - Bash(yarn create-webcomponents-wrapper*)
  - Bash(yarn create-webcomponents-wrapper-ai*)
  - Bash(yarn create-webcomponents-wrapper-compat*)
  - Bash(yarn create-theming-parameters*)
  - Bash(yarn create-exports*)
  - Bash(yarn install*)
  - Bash(yarn build*)
  - Bash(yarn build:mcp*)
  - Bash(yarn lint*)
metadata:
  internal: true
---

# UI5 Web Components Upgrade Protocol

Follow each step in order. Do NOT skip verification gates.

## Prerequisites

Ensure the working tree is clean before starting (`git status` should show no uncommitted changes). The upgrade touches many files across multiple packages, and a dirty tree makes it hard to isolate upgrade-related changes and risks committing unrelated work.

## Initialization

1. Parse the **target version** from the argument (e.g. `2.25.0` or `2.25.1`).
2. Derive two peerDependency ranges:
   - **Upstream range:** `~TARGET_VERSION` (e.g. `~2.25.1`) for `@ui5/webcomponents*` packages.
   - **React wrapper range:** `~TARGET_MAJOR.TARGET_MINOR.0` (e.g. `~2.25.0`) for the
     `@ui5/webcomponents-react` peer in the compat package. The wrapper release version is
     aligned to the UI5 Web Components minor, but it does not necessarily share the upstream
     patch version.
3. Read the **current version** from root `package.json` → `dependencies["@ui5/webcomponents"]`.
4. Check if Renovate already updated root deps — if `dependencies["@ui5/webcomponents"]` already matches target,
   note that Step 1a can be skipped. **Do not skip Step 1b:** Renovate updating the root does not prove that
   package peerDependencies are correct.
5. If the whole upgrade may already have been applied, still reconcile and verify Step 1b before deciding
   whether wrapper generation needs to be re-run.

---

## Step 1: Update Dependencies

### 1a. Root `package.json`

Skip if Renovate already handled this.

Update to the exact target version:

**dependencies:** `@ui5/webcomponents`, `@ui5/webcomponents-fiori`, `@ui5/webcomponents-ai`, `@ui5/webcomponents-compat`, `@ui5/webcomponents-icons`

**devDependencies:** `@ui5/webcomponents-tools`

> `@ui5/webcomponents-base` is NOT a direct root dependency — only update it in peerDependencies.

### 1b. Package peerDependencies

Update the upstream tilde ranges to `~TARGET_VERSION` and the compat package's internal React
wrapper peer to `~TARGET_MAJOR.TARGET_MINOR.0`. See `references/package-json-peer-deps.md` for
the exact map. Summary:

| File                                     | Keys to update                                                                                 |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `packages/main/package.json`             | `@ui5/webcomponents`, `-base`, `-fiori`, `-icons`                                              |
| `packages/base/package.json`             | `@ui5/webcomponents-base`                                                                      |
| `packages/ai/package.json`               | `@ui5/webcomponents-ai`                                                                        |
| `packages/compat/package.json`           | `@ui5/webcomponents-compat` → upstream range; `@ui5/webcomponents-react` → React wrapper range |
| `packages/cypress-commands/package.json` | `@ui5/webcomponents`, `-base`                                                                  |

> **Note:** `packages/charts/package.json` keeps its established `^2.21.0` compatibility floor and does **not** need updating for minor version bumps. The validator confirms that it was not accidentally narrowed.

### 1c. Install

```bash
yarn install
```

### Verify

Run the exact-value validator (replace the example with the real target):

```bash
node skills/maintainer/ui5wc-upgrade/scripts/verify-peer-deps.mjs 2.25.1
```

It verifies every mapped key against the correct range. Checking only for the old range is not
sufficient, because it cannot detect an incorrect upstream patch applied to the internal React peer.
For target `2.25.1`, these values must coexist in compat:

```json
"@ui5/webcomponents-compat": "~2.25.1",
"@ui5/webcomponents-react": "~2.25.0"
```

Also confirm that no old minor range remains:

```bash
grep -r "~OLD_MINOR" packages/*/package.json
```

The validator and the old-range check must both pass before continuing.

---

## Step 2: Compile CLI & Generate Wrappers

Run in sequence:

```bash
yarn create-webcomponents-wrapper
yarn create-webcomponents-wrapper-ai
yarn create-webcomponents-wrapper-compat
```

Each script compiles the CLI internally before generating. No separate `tsc` step needed.

`create-webcomponents-wrapper` already runs prettier, eslint --fix, and `sb:prepare-cem`.

### Verify

All commands exit 0. Then check for new components:

```bash
git diff --stat
git status --short -- packages/main/src/webComponents/ packages/ai/src/components/ packages/compat/src/components/ | grep "^?"
```

If any command fails, see `references/common-pitfalls.md`.

---

## Step 2b: Restore Custom Code in Generated Wrappers

The wrapper generator overwrites ALL files, including ones with hand-written customizations.
These components have custom code that MUST be restored after every generation run.
See `references/custom-wrapper-code.md` for the exact code to restore.

**Components with custom code:**

| Component        | Package | Custom Code                                                                         |
| ---------------- | ------- | ----------------------------------------------------------------------------------- |
| `ExpandableText` | main    | `addCustomCSSWithScoping` for whitespace, `DeprecatedExpandableTextProps` interface |
| `Table`          | compat  | `getCompatCustomElementsScopingSuffix` + tag name suffix                            |
| `TableCell`      | compat  | Same scoping suffix pattern                                                         |
| `TableColumn`    | compat  | Same scoping suffix pattern                                                         |
| `TableGroupRow`  | compat  | Same scoping suffix pattern                                                         |
| `TableRow`       | compat  | Same scoping suffix pattern                                                         |

**Procedure:**

1. Read the current generated file for each component above.
2. Read the reference in `references/custom-wrapper-code.md` for the custom code to merge.
3. Merge the custom code into the generated output. The generated types/props/JSDoc may
   have changed — integrate the custom additions with the new generated base.
4. If a generated change conflicts with the custom code in a way that cannot be
   automatically resolved (e.g., a type the custom code depends on was removed),
   **STOP and inform the user** with details of the conflict.
5. If the merge is possible but the generated code changed for these specific components
   (new props, changed types, updated JSDoc), **inform the user** that these components
   had generated changes that were merged with existing custom code.

### Verify

```bash
git diff packages/compat/src/components/Table/index.tsx
git diff packages/compat/src/components/TableCell/index.tsx
git diff packages/compat/src/components/TableColumn/index.tsx
git diff packages/compat/src/components/TableGroupRow/index.tsx
git diff packages/compat/src/components/TableRow/index.tsx
git diff packages/main/src/webComponents/ExpandableText/index.tsx
```

Each file should show ONLY the expected generated changes (updated props, JSDoc, etc.) while
retaining all custom code blocks.

---

## Step 3: Sync ThemingParameters

```bash
yarn create-theming-parameters
```

### Verify

```bash
git diff packages/base/src/styling/ThemingParameters.ts
```

Note added/removed CSS variable mappings for the PR description.

---

## Step 4: Update version-info.json

Edit `config/version-info.json` — add a new entry before the closing `}`:

```json
"X.Y.0": "TARGET_VERSION"
```

The key is the React wrapper minor version (`X.Y.0`), the value is the upstream `@ui5/webcomponents` target version from the argument. The React wrapper version itself is bumped by lerna during the release.

### Verify

```bash
node -e "JSON.parse(require('fs').readFileSync('config/version-info.json','utf8'));console.log('OK')"
```

---

## Step 5: Check for Theme Changes

```bash
ls packages/main/src/themes/*.css
```

Compare against the `Theme` enum in `packages/main/src/enums/Theme.ts`.

Check the UI5 Web Components release notes for theme additions/removals/consolidations.

If themes changed, follow `references/theme-and-storybook-checklist.md`. If not, skip.

---

## Step 6: Check for New Components (BEFORE build)

### 6a. Identify new components

From the `git status --short ... | grep "^?"` output in Step 2, look for new untracked directories under:

- `packages/main/src/webComponents/`
- `packages/ai/src/components/`
- `packages/compat/src/components/`

### 6b. Update barrel exports

The wrapper generator does NOT update barrel `index.ts` files. For each new component, add an export line in alphabetical order:

- `packages/main/src/webComponents/index.ts` → `export * from './<Name>/index.js';`
- `packages/ai/src/components/index.ts` (if AI component)
- `packages/compat/src/components/index.ts` (if compat component)

**This must happen BEFORE `yarn build`** — otherwise `tsc` won't compile new components into `dist/`, and `create-exports` will miss them.

### 6c. Stories and docs (can be done after build)

For **abstract components** (`@abstract` in JSDoc) or **subcomponents** (items/options that slot into a parent):

- Add a new story EXPORT to the parent component's existing `.stories.tsx`
- Add the subcomponent to the parent's `.mdx` docs (import, Canvas, Description, ArgTypes)
- Do NOT create a separate story file

For **standalone new components**:

- Create `<ComponentDir>/<Name>.stories.tsx` and `<ComponentDir>/<Name>.mdx`
- Follow the pattern of a similar existing component

If no new components, skip this step.

---

## Step 7: Check for Breaking Changes

From the wrapper diff, check:

**7a. Removed or renamed props** — deleted lines in `interface *Attributes` blocks.

**7b. Changed event signatures** — changes in event detail type imports.

**7c. Removed components** — entire component directories deleted.

**7d. Impact on custom components:**

```bash
grep -r "ChangedTypeName\|RemovedPropName" packages/main/src/components/
```

**Present findings prominently:**

```
## BREAKING CHANGES DETECTED
### <ComponentName>
- Removed prop: `oldProp`
- Renamed: `oldName` → `newName`
```

If none: "No breaking changes detected in generated wrappers."

---

## Step 8: Build & Verify

```bash
yarn build
```

Then lint the changed wrapper files (full `yarn lint` may OOM on this repo):

```bash
node --max-old-space-size=8192 ./node_modules/.bin/eslint packages/main/src/webComponents/*/index.tsx packages/compat/src/components/*/index.tsx packages/ai/src/components/*/index.tsx
```

If lint fails, try adding `--fix` first.

### 8b. Generate export maps (requires dist/ from build)

```bash
yarn create-exports
```

This reads `dist/` directories to update `package.json` exports maps for new components.

If new components were added, check that their exports are in correct **alphabetical order** in the package.json exports map. `create-exports` may append them at the end — move them to the correct position manually.

### 8c. Update and rebuild MCP server

If new components were added (Step 6), update the category mapping:

- `packages/mcp-server/src/utils/component-config.ts` — Add new components to the appropriate category array

Then rebuild:

```bash
yarn build:mcp
```

Verify it completes without "missing category definitions" errors.

### Verify

Build, lint, and create-exports all exit 0. Check if `create-exports` modified any `package.json` files:

```bash
git diff packages/*/package.json
```

---

## Step 9: Update Docs

> Renovate handles examples, templates, and patterns — skip those.

Only update:

- `docs/Welcome.mdx` — if theme list or version table changed
- Component stories — if breaking changes affected story props

---

## Step 10: Commit & PR

### Commit

Review `git status` before staging. Only stage upgrade-related files — avoid sweeping `git add -A` if unrelated changes are present.

```bash
git add package.json yarn.lock config/version-info.json \
  packages/*/package.json \
  packages/main/src/webComponents/ \
  packages/ai/src/components/ \
  packages/compat/src/components/ \
  packages/base/src/styling/ThemingParameters.ts \
  .storybook/custom-element-manifests/
git commit -m "feat: update to UI5 Web Components X.Y.0"
```

### PR description template

```markdown
## Summary

- Update `@ui5/webcomponents` family from A.B.C to X.Y.0
- Regenerated wrapper components for main, fiori, AI, and compat packages
- Synced ThemingParameters

## New Components

<!-- List or "None" -->

## Breaking Changes

<!-- List or "None detected" -->

## Theme Changes

<!-- List or "None" -->

## ThemingParameters Changes

<!-- Added/removed CSS variables or "None" -->
```

### Push & create PR

```bash
git push -u origin feat/ui5wc-X.Y.0
gh pr create --title "feat: update to UI5 Web Components X.Y.0" --body "<body>"
```

---

## Quick Reference: Scripts

| Script                                     | Purpose                                            |
| ------------------------------------------ | -------------------------------------------------- |
| `yarn install`                             | Install after version bumps                        |
| `yarn create-webcomponents-wrapper`        | Main + fiori wrappers + prettier + eslint + CEM    |
| `yarn create-webcomponents-wrapper-ai`     | AI wrappers                                        |
| `yarn create-webcomponents-wrapper-compat` | Compat wrappers                                    |
| `yarn create-theming-parameters`           | Regenerate ThemingParameters.ts                    |
| `yarn create-exports`                      | Regenerate package.json exports maps (needs dist/) |
| `yarn build`                               | Full monorepo build                                |
| `yarn build:mcp`                           | Rebuild MCP server (after new components)          |
| `yarn lint`                                | ESLint (may OOM — use targeted lint instead)       |
