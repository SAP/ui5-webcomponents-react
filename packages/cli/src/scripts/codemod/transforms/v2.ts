import type { API, FileInfo, Options } from 'jscodeshift';

export default function transform(file: FileInfo, api: API, options?: Options): string | undefined {
  const j = api.jscodeshift;
  const root = j(file.source);

  let isDirty = false;

  return isDirty ? root.toSource() : undefined;
}
