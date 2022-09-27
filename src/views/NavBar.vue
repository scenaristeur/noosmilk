<template>
  <div class="nav-bar">
    <RoomManager />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'NavBar',
  components: {
    RoomManager: defineAsyncComponent(() => import('@/views/RoomManager.vue')),
  },


}
</script>

<style lang="css" scoped>
.nav-bar {

}
</style>
