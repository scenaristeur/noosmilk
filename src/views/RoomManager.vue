<template>
  <div class="">
    <input v-model="roomId" placehoder="roomId" @keyup.enter="changeRoom" type="search"/>
    <button class="btn btn-primary btn-sm" @click="changeRoom">Open</button>

    <!-- <button
    class="btn btn-primary"
    data-bs-target="#collapseTarget"
    data-bs-toggle="collapse">
    Bootstrap collapse
  </button>
  <div class="collapse py-2" id="collapseTarget">
  This is the toggle-able content!
</div> -->

</div>
</template>

<script>
export default {
  name: 'RoomManager',
  data(){
    return{
      roomId: ""
    }
  },
  methods:{
    changeRoom(){
      console.log(this.roomId)
      this.$store.commit('setRoomId', this.roomId)
      this.roomId = ""
    }

  }


}
</script>

<style lang="css" scoped>
. {

}
</style>
