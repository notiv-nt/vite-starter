# Vite/Vue-cli typescript starter


### Included
- Vite / Vue-cli
- Vue 3 (router/store)
- Typescript
- Eslint (prettier/airbnb/typescript)
- Svg icons
- Scss
- Service worker


### How to use icons
```html
<template>
  <Icon />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '@/assets/icon.svg';

export default defineComponent({
  components: {
    Icon,
  },
});
</script>
```


### Tailwind

Install dependencies
```
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Uncomment these lines

`src/styles/index.scss`
```scss
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
```

`postcss.config.js`
```js
// tailwindcss: {},
```



#### TODO
- [ ] Add SSR
- [ ] Make single index.html for both vite & vue-cli
- [ ] https://github.com/tailwindlabs/tailwindcss/discussions/2854
