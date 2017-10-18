<template>
  <div id="app">
    <app-header></app-header>
    <transition mode="out-in" name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/navigation/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s; 
}

.slide-leave {
  opacity: 1;
}

.slide-leave-active {
  animation: slide-out 1s ease-in forwards;
  transition: opacity 0.5s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(20px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(20px);
  }
}
</style>
