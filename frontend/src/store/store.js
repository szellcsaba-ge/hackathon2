/* eslint-disable */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  message: 'Hello starschema kaja app',
};

const actions = {
  setMessage({ commit }, data) {
    commit('setmessage', data);
  },
};

const mutations = {
  setmessage(state, data) {
    state.message = data;
  },
};

const modules = {

};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
});
