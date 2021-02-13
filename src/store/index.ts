import { createStore } from 'vuex';

interface Store {
  user: null;
}

export default createStore<Store>({
  state: () => ({
    user: null,
  }),

  mutations: {},

  actions: {},

  getters: {},

  modules: {},
});
