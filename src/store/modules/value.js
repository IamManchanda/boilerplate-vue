/* eslint-disable no-shadow, no-param-reassign */

const state = {
  value: '',
};
const getters = {
  value: state => state.value,
};
const mutations = {
  updateValue: (state, payload) => {
    state.value = payload;
  },
};
const actions = {
  updateValue: ({ commit }, payload) => {
    commit('updateValue', payload);
  },
};

export default {
  state, getters, mutations, actions,
};
