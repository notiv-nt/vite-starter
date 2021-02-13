/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import { VitePWA } from 'vite-plugin-pwa';
import vueSvgPlugin from 'vite-plugin-vue-svg';
import pluginEnv from 'vite-plugin-vue-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePWA(),

    // import Icon from '@/assets/icon.svg';
    vueSvgPlugin({
      defaultExport: 'component',
    }),

    pluginEnv({
      BASE_URL: '/',
    }),
  ],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },

  build: {
    // manifest: true,
    // emptyOutDir: false,
  },

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import './src/styles/include';`,
      },
    },
  },
});
