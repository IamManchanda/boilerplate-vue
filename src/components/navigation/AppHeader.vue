<template lang="html">
  <div class="top-bar">
    <div class="top-bar-left">
      <ul class="dropdown menu">
        <li class="menu-text">Vue Project</li>
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            Projects
          </router-link>
        </li>
      </ul>
    </div>
    <div class="top-bar-right">
      <ul class="menu">
        <li><button type="button" class="button bordered">Login</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
};
</script>

<style lang="scss">
</style>