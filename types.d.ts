declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
