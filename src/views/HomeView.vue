<template>
  <div class="row">
    <div class="col-md-4 btn-align">
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search">
      </div>
    </div>
    <div class="col-md-4">
      <div class="btn-align">

        <router-link class="btn btn-primary" to="/add-news">Add News</router-link>
      </div>
    </div>
  </div>
  <div class="content-wrapper">
    <div class="news-card" v-for="post in getNews" :key="post.title">
      <img :src="post.urlToImage" style="width: 100%;">
      <div style="font-weight: 600; font-size: 1.25em; text-align: left; padding: 5px;">{{ post.title }}</div>
      <div class="news-card__details-wrapper">
        <p class="description">{{ post.description }}</p>
        <div class="author-text">Author: {{ post.author }}</div>
      </div>
    </div>
  </div>

</template>
<style>
@import '../assets/style.sass';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css';

.main {
    width: 50%;
    margin: 50px auto;
}

/* Bootstrap 4 text input with search icon */

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
</style>
<script setup>

import { onMounted, computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore();
const getNews = computed(() => {
  return store.getters.getNews
})

const users = computed(() => {
  return store.state.users
})

onMounted(() => {
  store.dispatch("fetchUsers");
})


</script>
