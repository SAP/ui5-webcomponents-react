import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,u as o}from"./blocks-DlSYZzFD.js";import{t as s,u as c}from"./components-CHwaeZBs.js";var l;function u(){return(u=e((()=>{l=`# UI5 Web Components for React MCP Server

MCP server providing development assistance and API documentation for [UI5 Web Components for React](https://github.com/UI5/webcomponents-react).

## What is this?

This MCP server gives AI assistants direct access to UI5 Web Components for React documentation, component APIs, and utility information. It helps developers get accurate, up-to-date information about the library without leaving their IDE.

## Setup

This server is available in the [MCP Registry](https://registry.modelcontextprotocol.io), which allows compatible clients to install it directly.

### Claude Code

\`\`\`bash
claude mcp add ui5-wcr -- npx @ui5/webcomponents-react-mcp@latest
\`\`\`

### VS Code / Cursor

Add to \`.vscode/mcp.json\`:

\`\`\`json
{
  "servers": {
    "ui5-wcr": {
      "command": "npx",
      "args": ["@ui5/webcomponents-react-mcp@latest"]
    }
  }
}
\`\`\`

### Pinning a Specific Version

The MCP server is available since \`@ui5/webcomponents-react@2.21.3\`. It shares the same version number and bundles documentation and API data for that specific release. Pinning the version to match your project ensures the AI assistant provides accurate information for the components and APIs you are actually using.

Append \`@<version>\` to install a specific version. Note that after updating \`@ui5/webcomponents-react\`, you need to update the pinned MCP server version accordingly.

\`\`\`bash
npx @ui5/webcomponents-react-mcp@2.21.3
\`\`\`

To match the version of \`@ui5/webcomponents-react\` installed in your project, run from the project root:

_This requires \`@ui5/webcomponents-react\` to be installed in the project's \`node_modules\`._

\`\`\`bash
npx @ui5/webcomponents-react-mcp@$(node -p "require('@ui5/webcomponents-react/package.json').version")
\`\`\`

## Transport

The server supports two transports. Both run locally on the developer's machine.

### stdio (default)

Used by the [Setup](#setup) configurations above. The client spawns the server as a subprocess and communicates over stdin/stdout. No flags are required.

### HTTP (Streamable HTTP)

Some MCP clients connect over HTTP instead. Start the server with the \`--http\` flag to enable the [Streamable HTTP](https://modelcontextprotocol.io/specification/basic/transports#streamable-http) transport:

\`\`\`bash
npx @ui5/webcomponents-react-mcp@latest --http
\`\`\`

The server listens on \`http://localhost:7427/mcp\`. Change the port with \`--port\` (or the \`PORT\` environment variable):

\`\`\`bash
npx @ui5/webcomponents-react-mcp@latest --http --port 7500
\`\`\`

It runs **statelessly** and binds to \`localhost\` only — reachable over a local HTTP port, but otherwise the same local-only, version-pinned server as the stdio mode. Point your HTTP-based client at the endpoint:

\`\`\`json
{
  "servers": {
    "ui5-wcr": {
      "url": "http://localhost:7427/mcp"
    }
  }
}
\`\`\`

## Features

### Tools

1. **\`create_app\`** - Scaffold a new application from an official template
   - Vite (TypeScript), Next.js App Router, Next.js Pages Router
   - Returns step-by-step setup instructions using \`degit\`

2. **\`list_components\`** - Browse all available components
   - Filter by category (Data Display, Layouts & Floorplans, Inputs, Modals & Popovers, User Feedback, Charts, AI Components, Web Components)
   - Filter by package (\`@ui5/webcomponents-react\`, \`@ui5/webcomponents-react-charts\`, \`@ui5/webcomponents-ai-react\`)
   - Includes descriptions and import examples

3. **\`get_component_api\`** - Full component API documentation
   - Props with TypeScript types, descriptions, and defaults
   - Event detail parameters (fields available on \`e.detail\`)
   - Ref methods and return types
   - CSS \`::part()\` selectors for shadow DOM styling
   - Sub-type documentation for complex props (e.g. AnalyticalTable column definitions)
   - Upstream documentation links for components with complex behavioral logic
   - Case-insensitive component name matching
   - Returns structured JSON output

4. **\`get_documentation\`** - Documentation, guides, and knowledge base
   - Browse by section name or search by keyword across all docs
   - Getting Started, Knowledge Base (styling, i18n, SSR, slots, FAQ, accessibility, and more), project templates
   - Full content read from bundled local files (no network required)
   - Line-range support (\`startLine\`/\`endLine\`) for large documents

5. **\`get_public_utils\`** - Public utilities from \`@ui5/webcomponents-react-base\`
   - Device API (device detection, responsive breakpoints, resize/orientation handlers)
   - useI18nBundle hook (internationalization)
   - useViewportRange hook (responsive breakpoint detection)
   - ThemingParameters (CSS variables in JavaScript)

### Resources

- **\`llms.txt\`** - LLM-friendly documentation index with scope, key concepts, and quick-reference links

## Usage

Once configured, your AI assistant will have access to the tools. You can ask questions like:

**Create:**

- "Create a new Vite app with UI5 Web Components for React"
- "Scaffold a Next.js app with a simple dashboard"

**Documentation:**

- "How do I style components?"
- "How do slots work?"

**Components:**

- "List all available components"
- "Show me chart components"
- "What layout components are available?"
- "Show me the API for AnalyticalTable"
- "How do I use the DynamicPage component?"

## Contributing

See [CONTRIBUTING.md](https://github.com/UI5/webcomponents-react/blob/main/packages/mcp-server/CONTRIBUTING.md) for development setup, scripts, architecture, and build pipeline details.
`})))()}function d(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{title:`MCP Server`}),`
`,(0,p.jsx)(o,{children:l.replace(/^## Contributing[\s\S]*$/m,``)}),`
`,(0,p.jsx)(c,{})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),r(),s(),i(),u()})))()}m();export{f as default};