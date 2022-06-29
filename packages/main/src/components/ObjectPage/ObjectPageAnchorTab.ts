/* eslint-disable no-underscore-dangle */
import { html } from '@ui5/webcomponents-base/dist/renderer/LitRenderer.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import Tab from '@ui5/webcomponents/dist/Tab.js';
import TabContainer from '@ui5/webcomponents/dist/TabContainer.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { unsafeStatic } from 'lit-html/static.js';
import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from 'react';

const scopeTag = (tag, tags, suffix) => {
  const resultTag = suffix && (tags || []).includes(tag) ? `${tag}-${suffix}` : tag;
  return unsafeStatic(resultTag);
};

interface ObjectPageAnchorTabPropTypes extends HTMLAttributes<HTMLElement> {
  text: string;
  'with-sub-sections'?: boolean;
  selected?: boolean;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'ui5-object-page-anchor-tab': DetailedHTMLProps<ObjectPageAnchorTabPropTypes, HTMLElement>;
    }
  }
}

const metadata = {
  tag: 'ui5-object-page-anchor-tab',
  properties: {
    withSubSections: {
      type: Boolean
    }
  },
  events: {
    'show-sub-sections': {}
  }
};

class ObjectPageAnchorTab extends Tab {
  static get metadata() {
    return metadata;
  }

  static get stripTemplate() {
    return (context, tags, suffix) => {
      return html` <div
        id="${ifDefined(context._id)}"
        class="${ifDefined(context.stripClasses)}"
        tabindex="${ifDefined(context._tabIndex)}"
        role="tab"
        aria-posinset="${ifDefined(context._posinset)}"
        aria-setsize="${ifDefined(context._setsize)}"
        aria-controls="ui5-tc-content"
        aria-selected="${ifDefined(context.effectiveSelected)}"
        aria-disabled="${ifDefined(context.effectiveDisabled)}"
        ?disabled="${context.effectiveDisabled}"
        aria-labelledby="${ifDefined(context.ariaLabelledBy)}"
        data-ui5-stable="${ifDefined(context.stableDomRef)}"
        ._realTab="${ifDefined(context)}"
      >
        <div class="ui5-tab-strip-itemContent">
          ${context.text
            ? html`<span
                class="ui5-tab-strip-itemText"
                id="${ifDefined(context._id)}-text"
                ?data-active="${ifDefined(context.withSubSections)}"
              >
                ${ifDefined(context.text)}
              </span>`
            : undefined}
          ${context.withSubSections
            ? html` <${scopeTag('ui5-icon', tags, suffix)}
                name="slim-arrow-down"
                class="objectPageSubSectionsIcon"
                interactive
                @click="${context._handleOnSubSectionsClick}"
              />`
            : undefined}
        </div>
      </div>`;
    };
  }

  _handleOnSubSectionsClick: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.fireEvent('show-sub-sections', {
      targetRef: (e.target as any).parentElement.parentElement
    });
  };
}

TabContainer.registerTabStyles(`

:host([data-component-name="ObjectPageTabContainer"]) .ui5-tab-strip-itemContent {
  display: flex;
  align-items: center;
  pointer-events: all;
  flex-direction: row;
}

.objectPageSubSectionsIcon {
  padding-left: 0.625rem;
}

.objectPageSubSectionsIcon[interactive]:hover {
  color: ${ThemingParameters.sapContent_IconColor};
}

:host([data-component-name="ObjectPageTabContainer"]) .ui5-tab-strip-itemText[data-active]:hover {
  color: ${ThemingParameters.sapButton_Lite_Hover_TextColor};
}
`);

export { ObjectPageAnchorTab };
