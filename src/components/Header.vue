  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <template>
    <header>
      <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'about'}">About</router-link></li>
        <li><router-link :to="{name: 'contacts'}">Contacts</router-link></li>
        <li><router-link :to="{name: 'blog'}">Blog</router-link></li>
      </ul>
    </header>
  </template>

  <style lang="scss" scoped>
    
    ul{
      display: flex;
      list-style: none;
      justify-content: center;
      li{
        margin: 0px 5px;
        font-size: large;
        a{
          text-decoration: none;
          color: white;
        }:hover{
            color: yellow;
          }
      }
    }
  </style>