/* eslint-disable */
import Vuex from 'vuex';
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  message: 'Lunch Finder',
  places: []
};

const actions = {
  setMessage({ commit }, data) {
    commit('setmessage', data);
  },
  getPlaces({ commit }) {
    Vue.http.get('http://localhost/api/v1/sample.json').then((data, status, request) => {
      let markers = [];
      data.body.places.map((place) => {
        markers.push({
          position: { lat: place.latitude, lng: place.longitude },
          infoText: place.place_name,
        });
      });
      commit('setPlaces', markers);
    });
  }
};

const mutations = {
  setmessage(state, data) {
    state.message = data;
  },
  setPlaces(state, data) {
    state.places = data;
  }
};

const modules = {

};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
});
