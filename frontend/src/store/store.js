import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  message: 'Lunch Finder',
};

export default new Vuex.Store({
  state,
});
