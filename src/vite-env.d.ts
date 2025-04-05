/// <reference types="vite/client" />
/// <reference types="vite-plugin-imagetools/client" />

declare module "*.svg?width=1200&height=600" {
  const content: string;
  export default content;
}
