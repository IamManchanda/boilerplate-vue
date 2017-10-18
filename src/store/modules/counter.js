/* eslint-disable no-shadow, no-param-reassign */

const state = {
  counter: 0,
};

const getters = {
  calculationCounter: state => state.counter,
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  },
};

const actions = {
  increment: ({ commit }, payload) => { // Context
    commit('increment', payload);
  },
  decrement: ({ commit }, payload) => { // Context
    commit('decrement', payload);
  },
};

export default {
  state, getters, mutations, actions,
};
