# Package peerDependency Map for UI5 WC Upgrades

When upgrading to a target version, use two distinct ranges:

- Upstream UI5 Web Components packages: `~TARGET_VERSION`.
- Internal React wrapper peers: `~TARGET_MAJOR.TARGET_MINOR.0`.

For example, target `2.25.1` means upstream peers use `~2.25.1`, while the compat
package's `@ui5/webcomponents-react` peer uses `~2.25.0`.

## Root package.json (dependencies, NOT peerDeps)

Update to exact target version (e.g. `2.25.1`):

```json
"dependencies": {
  "@ui5/webcomponents": "TARGET_VERSION",
  "@ui5/webcomponents-ai": "TARGET_VERSION",
  "@ui5/webcomponents-compat": "TARGET_VERSION",
  "@ui5/webcomponents-fiori": "TARGET_VERSION",
  "@ui5/webcomponents-icons": "TARGET_VERSION"
},
"devDependencies": {
  "@ui5/webcomponents-tools": "TARGET_VERSION"
}
```

`@ui5/webcomponents-base` is NOT a direct root dependency.

---

## packages/main/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents": "~X.Y.Z",
  "@ui5/webcomponents-base": "~X.Y.Z",
  "@ui5/webcomponents-fiori": "~X.Y.Z",
  "@ui5/webcomponents-icons": "~X.Y.Z"
}
```

## packages/base/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-base": "~X.Y.Z"
}
```

## packages/ai/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-ai": "~X.Y.Z"
}
```

## packages/compat/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents-compat": "~X.Y.Z",
  "@ui5/webcomponents-react": "~X.Y.0"
}
```

These ranges deliberately differ when the upstream target is a patch release.
`@ui5/webcomponents-compat` tracks the exact upstream target, while
`@ui5/webcomponents-react` tracks the wrapper release line.

## packages/charts/package.json

Charts uses **caret ranges** (`^`) with an established `2.21.0` compatibility floor, so its
peerDependencies do **not** change during UI5 Web Components upgrades. Only change this floor
when charts itself stops supporting older wrapper versions.

```json
"peerDependencies": {
  "@ui5/webcomponents-react": "^2.21.0",
  "@ui5/webcomponents-react-base": "^2.21.0"
}
```

## packages/cypress-commands/package.json

```json
"peerDependencies": {
  "@ui5/webcomponents": "~X.Y.Z",
  "@ui5/webcomponents-base": "~X.Y.Z"
}
```

---

## Important Notes

- `charts` and `compat` reference `@ui5/webcomponents-react` (the React wrapper), not the upstream `@ui5/webcomponents` packages directly. Never copy the upstream patch version into these internal wrapper peer ranges.
- `@ui5/webcomponents-react-base` in `charts` tracks the monorepo version, which since v2.4.0 aligns with the UI5 WC minor version.
- `peerDependenciesMeta` sections do NOT need updating — they only mark deps as optional and contain no version info.
- Non-UI5 peer deps (`react`, `react-dom`, `@types/react`, `cypress`) are NOT touched during upgrades.
