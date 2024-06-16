<template>
    <div>
      <h1>Welcome to {{ profile.name }}</h1>
      <p>{{ profile.description }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const API_URL = 'http://localhost:3000';
  
  export default {
    name: 'Home',
    data() {
      return {
        profile: {}
      };
    },
    created() {
      axios.get(`${API_URL}/profile`)
        .then(response => {
          this.profile = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  </script>
  