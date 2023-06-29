
<script>
import {store} from './store/store.js';
import axios from 'axios';

import Header from './components/Header.vue';

export default {
    name: 'App',
    components: {
        Header
    },

    data(){
            return{
                posts:[]
            }
        },

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
        <Header/>
        <router-view></router-view>    
    </div>
</template>

<style lang="scss">
    @use './store/scss/style.scss';
</style>
