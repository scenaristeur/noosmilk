<template>
  <div class="home">
    <RoomManager />
    <MilkEditor />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'HomeView',
  components: {
    RoomManager: defineAsyncComponent(() => import('@/views/RoomManager.vue')),
    MilkEditor: defineAsyncComponent(() => import('@/views/MilkEditor.vue'))
    //
    // 'RoomManager': ()=>import('@/views/RoomManager'),
    // 'MilkEditor': ()=>import('@/views/MilkEditor'),
  },
}
</script>
