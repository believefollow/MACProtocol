import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getter';
import { randomInitUser, User } from './class';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    users: randomInitUser(),
  },
  mutations: {
    increment(state) {
      state.users.push(new User());
    },
  },
  actions: {
  },
  modules: {
  },
  getters,
});
