import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import value from './modules/value';

Vue.use(Vuex);

/* eslint-disable */

export const store = new Vuex.Store({
  modules: { counter, value },
});

/*eslint-enable*/

