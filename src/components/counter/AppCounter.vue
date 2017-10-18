<template>
  <div>
    <button class="button primary rounded" @click="increment(100)">Increment by 100</button>
    <button class="button primary rounded" @click="decrement(50)">Decrement by 50</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'counter',
  methods: {
    ...mapActions(['increment', 'decrement']),
  },
};
</script>