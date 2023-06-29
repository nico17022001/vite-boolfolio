  <script>
  import {store} from '../store/store';
  import axios from 'axios';

  export default {
    name:'Blog',

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
    <div class="container-inner">
      <h1>Blog</h1>
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

  <style>
  
  </style>