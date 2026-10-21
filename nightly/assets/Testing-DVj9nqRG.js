import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a}from"./blocks-D4P5IKNV.js";import{g as o,t as s,u as c}from"./components-BAyU7DX7.js";function l(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{title:`Testing`}),`
`,(0,d.jsx)(t.h1,{id:`testing`,children:`Testing`}),`
`,(0,d.jsx)(o,{}),`
`,(0,d.jsxs)(t.p,{children:[`This guide covers the particularities of testing UI5 Web Components for React — the things that
behave differently from plain React components because these are custom elements with Shadow DOM.
It is `,(0,d.jsx)(t.strong,{children:`not tied to a specific test runner`}),`: the advice applies to any tool that drives a
`,(0,d.jsx)(t.strong,{children:`real browser`}),` (for example Cypress, Playwright, or WebdriverIO).`]}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Use a real browser, not JSDOM.`}),`
UI5 Web Components are custom elements that rely on the real DOM — Shadow DOM, custom-element
upgrades, slots, and CSS. Virtual-DOM environments such as JSDOM (the default for Jest and
Vitest) do not implement these, so components will not render or behave correctly. Choose a
runner that executes in an actual browser.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`component-test-setup`,children:`Component test setup`}),`
`,(0,d.jsx)(t.p,{children:`When you mount a component in isolation (component testing), you have to provide the same runtime
context the real app would. Two things are required:`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsxs)(t.strong,{children:[`Wrap the mounted component in `,(0,d.jsx)(t.code,{children:`ThemeProvider`}),`, as the outermost element.`]}),` Components read
theming and configuration from it, so it must sit above whatever you render.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`mount(
  <ThemeProvider>
    <YourComponentUnderTest />
  </ThemeProvider>,
);
`})}),`
`,(0,d.jsxs)(t.p,{children:[`Set this up once in your runner's mount wrapper (e.g. a custom Cypress `,(0,d.jsx)(t.code,{children:`mount`}),` command, or
Playwright CT's `,(0,d.jsx)(t.code,{children:`beforeMount`}),` hook) so every test gets it automatically.`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Import the assets`}),` once in your test setup if the test depends on translations (i18n),
theming, or locale-specific (CLDR) formatting — otherwise components render with English text
only and theme switching won't work:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import '@ui5/webcomponents-react/dist/Assets.js';
`})}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsxs)(t.p,{children:[`This setup applies to `,(0,d.jsx)(t.strong,{children:`component testing`}),`. In `,(0,d.jsx)(t.strong,{children:`end-to-end`}),` tests you drive the real
application, which already renders `,(0,d.jsx)(t.code,{children:`ThemeProvider`}),` and imports assets — so you don't add either
in the test itself.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`selecting-elements`,children:`Selecting elements`}),`
`,(0,d.jsxs)(t.p,{children:[`Select the host element by its `,(0,d.jsx)(t.strong,{children:`attribute selector`}),` — the tag name written as an attribute in
square brackets, e.g. `,(0,d.jsx)(t.code,{children:`[ui5-button]`}),` for `,(0,d.jsx)(t.code,{children:`<ui5-button>`}),` — rather than by the tag name itself.
This keeps selectors working when custom-element `,(0,d.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/scoping/`,rel:`nofollow`,children:`scoping`}),`
adds a suffix to the tag name (e.g. `,(0,d.jsx)(t.code,{children:`<ui5-button-a1b2c3>`}),`).`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`// ✅ attribute selector — robust against scoping
get('[ui5-button]')

// ❌ tag-name selector — breaks when scoping is enabled
get('ui5-button')
`})}),`
`,(0,d.jsxs)(t.p,{children:[`Component internals live in the Shadow DOM. Real-browser runners can pierce it, so if a test
genuinely needs an internal element you can query and assert on it — for example Cypress with
`,(0,d.jsx)(t.code,{children:`includeShadowDom: true`}),`, or Playwright, whose locators pierce shadow roots by default. Prefer
asserting on the component's public surface (props, attributes, emitted events) where you can;
reach into the shadow tree only when there's no equivalent public signal, and expect such
assertions to be more brittle since internal structure can change between versions.`]}),`
`,(0,d.jsxs)(t.p,{children:[`To identify which item fired a collection event (e.g. from `,(0,d.jsx)(t.code,{children:`e.detail`}),`), see
`,(0,d.jsx)(t.a,{href:`https://ui5.github.io/webcomponents-react/?path=/docs/knowledge-base-ids-via-dataset--docs`,rel:`nofollow`,children:`IDs via dataset`}),`.`]}),`
`,(0,d.jsx)(t.h2,{id:`web-components-are-asynchronous`,children:`Web components are asynchronous`}),`
`,(0,d.jsxs)(t.p,{children:[`This is the pitfall behind most flaky UI5 tests. A UI5 Web Component is not fully usable the
moment it appears in the DOM — it becomes ready in `,(0,d.jsx)(t.strong,{children:`two asynchronous stages`}),`:`]}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Custom element definition`}),` — the browser has to register (define + upgrade) the custom
element before the host is anything more than an inert placeholder. This happens
asynchronously, especially when component modules are loaded on demand.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Internal rendering`}),` — even after definition, the component renders its own Shadow DOM (and
sometimes nested sub-components) asynchronously. So the shadow parts, inner elements, and
final layout appear a tick `,(0,d.jsx)(t.em,{children:`after`}),` the host exists.`]}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`A test that queries an internal node, reads a computed style, or clicks a shadow element `,(0,d.jsx)(t.strong,{children:`too
early`}),` will intermittently fail — the target may not exist or may not be positioned yet.`]}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Wait by asserting on the element, not with a fixed delay.`}),` The reliable, framework-agnostic
approach is to let the runner's retrying assertions wait for the actual state you care about —
they keep re-checking until the async definition and rendering have completed:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Wait for the host to exist / be visible via its attribute selector (e.g. `,(0,d.jsx)(t.code,{children:`[ui5-button]`}),`).`]}),`
`,(0,d.jsx)(t.li,{children:`For interactions with internals, assert on the specific target (a shadow part, an option, a
menu item) — prefer a visibility assertion over a mere existence check, since a node can be
present in the DOM before it is actually shown (see overlays below).`}),`
`,(0,d.jsxs)(t.li,{children:[`For overlays, wait on the state that indicates readiness (e.g. a popover's `,(0,d.jsx)(t.code,{children:`open`}),` attribute —
see the "Popovers, menus, and dialogs" section below).`]}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`Avoid fixed timeouts (`,(0,d.jsx)(t.code,{children:`wait(500)`}),`) to "let the component settle" — they are both flaky and slow.
Gate on a retrying assertion of the element or its state instead.`]}),`
`,(0,d.jsx)(t.h2,{id:`abstract-components-render-into-their-parent`,children:`Abstract components render into their parent`}),`
`,(0,d.jsxs)(t.p,{children:[`Some components are `,(0,d.jsx)(t.strong,{children:`abstract`}),` (marked `,(0,d.jsx)(t.code,{children:`@abstract`}),`). Unlike a normal component, an abstract
component does `,(0,d.jsx)(t.strong,{children:`not`}),` render its own top-level shadow root — it renders into the DOM of its
`,(0,d.jsx)(t.strong,{children:`parent`}),`. Typical examples are slotted item components such as `,(0,d.jsx)(t.code,{children:`SuggestionItem`}),`, `,(0,d.jsx)(t.code,{children:`Tab`}),`,
`,(0,d.jsx)(t.code,{children:`ToolbarButton`}),`, `,(0,d.jsx)(t.code,{children:`WizardStep`}),`, and `,(0,d.jsx)(t.code,{children:`SideNavigationItem`}),`.`]}),`
`,(0,d.jsx)(t.p,{children:`Abstract components are marked as such in their API documentation.`}),`
`,(0,d.jsx)(t.p,{children:`This matters for testing because the host placeholder element you write in JSX is not the node
that actually renders or carries the interaction handlers. To reach the real node, use the
component's DOM utility methods:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`getDomRef()`})}),` — returns the DOM element that represents the component. For an abstract
component this is the `,(0,d.jsx)(t.strong,{children:`parent-owned`}),` node that renders it, not a placeholder.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`getFocusDomRef()`})}),` — returns the element marked `,(0,d.jsx)(t.code,{children:`data-sap-focus-ref`}),` (the node that
receives focus by default).`]}),`
`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`// For an abstract component, reach the rendered node via its instance handle,
// by evaluating in the browser: element.getDomRef()
rendered = get('[ui5-tab]').evaluate((el) => el.getDomRef())
`})}),`
`,(0,d.jsx)(t.p,{children:`For non-abstract components this is rarely necessary — the host element renders its own shadow
DOM, and interacting with the host works directly (see the next section).`}),`
`,(0,d.jsx)(t.h2,{id:`popovers-menus-and-dialogs-wait-until-open`,children:`Popovers, menus, and dialogs: wait until open`}),`
`,(0,d.jsxs)(t.p,{children:[`Overlay content — popovers, menus, dialogs, dropdowns — is only `,(0,d.jsx)(t.strong,{children:`visible and interactable while
it is open`}),`, and when open it is displayed in a top-layer/overlay container rather than inline in
the page flow.`]}),`
`,(0,d.jsxs)(t.p,{children:[`Note that "in the DOM" and "interactable" are not the same thing here. Slotted content (for
example a `,(0,d.jsx)(t.code,{children:`Menu`}),`'s `,(0,d.jsx)(t.code,{children:`MenuItem`}),`s) is authored by you as light-DOM children, so unless you render it
conditionally it is `,(0,d.jsx)(t.strong,{children:`always`}),` in the DOM — even while the overlay is closed. Querying for its
existence therefore succeeds regardless of open state, yet the content is not visible or clickable
until the overlay opens.`]}),`
`,(0,d.jsx)(t.p,{children:`Two consequences for tests:`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Wait for the open state (or visibility), not just existence, before interacting.`}),` Asserting
the overlay's `,(0,d.jsx)(t.code,{children:`open`}),` attribute — or that the target is `,(0,d.jsx)(t.em,{children:`visible`}),` — waits for the state that
actually makes it interactable, whereas an existence check can pass while the item is still
hidden.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`// open the menu, then wait for it to be open before interacting
click(opener)
expect('[ui5-menu]').toHaveAttribute('open')
click('[ui5-menu-item][text="New File"]')
`})}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Prefer a real, coordinate-based click over a synthetic one.`}),` A real click (what
browser-driving runners perform) hit-tests through the Shadow DOM and lands on the node that
actually carries the handler. A `,(0,d.jsx)(t.strong,{children:`synthetic`}),` `,(0,d.jsx)(t.code,{children:`element.click()`}),` dispatched on the host element
fires on an ancestor of the handler node and may never reach it — so it can silently do
nothing. Let your runner perform its normal click on the element rather than calling
`,(0,d.jsx)(t.code,{children:`element.click()`}),` yourself in page-evaluated code.`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Because overlays open and animate asynchronously, always gate interactions on the open state (as
above) rather than on fixed delays.`}),`
`,(0,d.jsx)(c,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),s(),i()})))()}f();export{u as default};