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


#### TODO
- [ ] Add SSR
- [ ] Add tailwind as optional
- [ ] Make single index.html for both vite/vue-cli
