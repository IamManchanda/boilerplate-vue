<template>
  <div>
    <p>This Counter is: {{ calculationCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'result',
  computed: {
    ...mapGetters(['calculationCounter']),
  },
};
</script>
