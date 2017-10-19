<template>
  <div class="grid-container margin-top-1">
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 medium-4 large-3">
        <app-timeline-sidebar></app-timeline-sidebar>
      </div>
      <div class="cell small-12 medium-8 large-9">
        <transition mode="out-in" name="slide">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
  
</template>

<script>
import AppTimelineSidebar from '@/containers/timeline/sidebar/AppTimelineSidebar';

export default {
  name: 'timeline',
  components: { AppTimelineSidebar },
};
</script>