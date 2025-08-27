import { getEffectiveScopingSuffixForTag } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';

/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export const deprecationNotice = (component: string, message: string) => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    const value = `*** ui5-webcomponents-react Deprecation Notice - ${component} ***\n`;

    if (console && console.warn) {
      console.warn(`${value}${message}`);
    }
  }
};

/**
 * Define EnrichedEventType to extend Event with specific detail structure
 */
type EnrichedEventType<Event, Detail> = Event & {
  detail: Detail & { nativeDetail?: number };
};

/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export const enrichEventWithDetails = <
  Event extends { detail?: number | Record<string, unknown> | null },
  Detail extends Record<string, unknown>,
>(
  event: Event,
  payload: Detail,
): EnrichedEventType<Event, Detail> => {
  if (!event) {
    return event as EnrichedEventType<Event, Detail>;
  }

  // Determine if we need to create a new details object
  const shouldCreateNewDetails =
    event.detail === null || event.detail === undefined || typeof event.detail !== 'object';

  // native detail is always number (if available)
  const nativeDetail = typeof event.detail === 'number' ? event.detail : null;

  // defineProperty is necessary here as event.detail needs to be editable
  Object.defineProperty<Event>(event, 'detail', {
    value: shouldCreateNewDetails ? {} : event.detail,
    writable: true,
    configurable: true,
  });

  if (nativeDetail) {
    Object.assign(event.detail, { nativeDetail });
  }
  Object.assign(event.detail, payload);

  return event as EnrichedEventType<Event, Detail>;
};

/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export function getUi5TagWithSuffix(baseTagName: string) {
  const tagNameSuffix: string | undefined = getEffectiveScopingSuffixForTag(baseTagName);
  return tagNameSuffix ? `${baseTagName}-${tagNameSuffix}` : baseTagName;
}

export { debounce } from './debounce.js';
export { throttle } from './throttle.js';
/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export const lowercaseFirstLetter = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export const camelToKebabCase = (s: string) => s.replace(/([A-Z])/g, (a, b: string) => `-${b.toLowerCase()}`);
/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export const kebabToCamelCase = (str: string) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

const SEMVER_REGEX =
  /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/**
 * ⚠️ __INTERNAL__ use only! This function is not part of the public API.
 */
export function parseSemVer(version: string) {
  const parsed = SEMVER_REGEX.exec(version).groups;
  return {
    version,
    major: parseInt(parsed.major),
    minor: parseInt(parsed.minor),
    patch: parseInt(parsed.patch),
    prerelease: parsed.prerelease,
    buildMetadata: parsed.buildmetadata,
  };
}
