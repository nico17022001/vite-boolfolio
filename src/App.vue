
<script>
import {store} from './store/store.js';
import axios from 'axios';

export default {
    name: 'App',

    methods:{
        getApi(){
            axios.get(store.apiUrl + 'posts')
            .then(results => {
                this.posts = results.data;
                console.log(this.posts)
            })
        }
    },

    mounted(){
        this.getApi();
    }
}
</script>

<template>

    <div class="container">
      
        <h1>Elenco dei post</h1>

        <ul>
            <li
            v-for="post in posts"
            :key="post.id"
            >
            <span>{{ post.title }}</span> <span>{{ post.date }}</span>
            </li>
        </ul>
    </div>
    
</template>

<style lang="scss" scoped>
  @use '../src/store/scss/style.scss';
</style>
