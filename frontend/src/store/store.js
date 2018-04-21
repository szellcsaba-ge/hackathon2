import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  message: 'Hello starschema kaja app',
};

export default new Vuex.Store({
  state,
});
