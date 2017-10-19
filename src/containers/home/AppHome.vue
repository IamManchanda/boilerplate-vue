<template>
  <div class="grid-container margin-top-1">
    <div class="grid-x">
      <div class="cell">
        <h1 class="h5">Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea accusantium architecto ipsum voluptate illum excepturi itaque, impedit! Veniam iste, optio assumenda debitis quis recusandae soluta, dolorem. Tempore nostrum sequi ab.</p>
        <hr>
        <h2 class="h5 margin-bottom-1">Vuex Counter</h2>
        <app-counter></app-counter>
        <app-result></app-result>
        <hr>
        <h2 class="h5 margin-bottom-1">Vuex Form <small>no need for `v-model`</small></h2>
        <label>Enter your name
        <input type="text" :value="value" @input="updateValue">
        </label>
        <p v-if="value != ''">
          Welcome, {{ value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppCounter from '@/components/counter/AppCounter';
import AppResult from '@/components/counter/AppResult';

export default {
  name: 'home',
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      },
    },
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value);
    },
  },
  components: { AppCounter, AppResult },
};
</script>

<style lang="scss" scoped>
</style>
