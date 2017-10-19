<template>
  <div>
    <ul class="list-group">
      <router-link :to="{ name: 'timeline-home' }" tag="li" class="list-group-item" active-class="active" exact>
        Timeline Home
      </router-link>
      <router-link :to="{ name: 'timeline-account' }" tag="li" class="list-group-item" active-class="active">
        Account Settings
      </router-link>
      <router-link :to="{ name: 'timeline-messages' }" tag="li" class="list-group-item" active-class="active">
        Messages
      </router-link>
      <router-link :to="{ name: 'timeline-notifications' }" tag="li" class="list-group-item" active-class="active">
        Notifications
      </router-link>
    </ul>
  </div>
</template>
