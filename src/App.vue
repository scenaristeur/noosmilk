<template>
  <!-- <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</nav> -->
<div>
  <NavBar />
  <div style="margin-top: 120px;" >
    <router-view/>
  </div>
  <SideBar />
</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'AppView',
  components: {
    NavBar: defineAsyncComponent(() => import('@/views/NavBar.vue')),
    SideBar: defineAsyncComponent(() => import('@/views/SideBar.vue')),
    //
    // 'RoomManager': ()=>import('@/views/RoomManager'),
    // 'MilkEditor': ()=>import('@/views/MilkEditor'),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  text-align: center;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
