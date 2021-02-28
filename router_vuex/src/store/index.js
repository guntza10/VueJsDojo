import Vue from "vue";
import Vuex from "vuex";

import state from '@/store/state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';


Vue.use(Vuex);

export default new Vuex.Store({
  // state: state,
  // mutations: mutations,
  // actions: actions,

  // enhance object property
  state,
  mutations,
  actions,
  getters
});
