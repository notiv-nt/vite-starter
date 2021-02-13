/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// vite-plugin-vue-svg
declare module '*.svg' {
  import { Component } from 'vue';

  const src: Component;
  export default src;
}
