<template>
  <div class="grid-container margin-top-1">
    <div class="grid-x">
      <div class="cell">
        <h1 class="h5">Projects Page</h1>
        <p>Find below a list of dummy projects, courtesy of jsonplaceholder...</p>
        <table class="table bordered rounded">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Project Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in projects">
              <td>{{item.id}}</td>
              <td>{{item.title}}</td>
              <td v-if="item.completed">Completed</td>
              <td v-else>In Progress</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'projects',
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    loadProjects() {
      axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
        this.projects = response.data;
      });
    },
  },
  mounted() {
    this.loadProjects();
  },
};
</script>

<style lang="scss" scoped>
  td, th {
    border: 1px solid #cacaca;
  }
</style>
