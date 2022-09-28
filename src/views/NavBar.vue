<template>

  <b-navbar class="nav-bar" fixed="top" toggleable="lg" type="light" variant="info">
    <!-- <b-navbar-brand href="#"> -->

    <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      +
    </button>
    <RoomManager />
    <!-- NavBar -->
    <!-- </b-navbar-brand> -->
    <b-navbar-toggle target="nav-collapse" size="sm"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/"><span class="material-symbols-outlined">home</span></b-nav-item>
        <!-- <MenuNew />
        <b-nav-item to="/profile">profile <b-icon icon="person" aria-hidden="true"></b-icon></b-nav-item>
        <b-nav-item to="/config">config <b-icon icon="gear" aria-hidden="true"></b-icon></b-nav-item>
        <b-nav-item to="/graph">network</b-nav-item> -->

        <b-nav-item-dropdown text="more" right>
          <b-dropdown-item to="/about">What is Noosphere<b-icon icon="question" aria-hidden="true"></b-icon></b-dropdown-item>
          <b-dropdown-item href="https://matrix.to/#/#noosphere:matrix.org" target="_blank"> Chat about Noosphere <b-icon icon="chat" aria-hidden="true"></b-icon> </b-dropdown-item>
          <b-dropdown-item href="#">
            <i><small>
              version: split
            </small></i>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form> -->

      <!-- <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <template #button-content>
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>
  </b-collapse>
</b-navbar>


</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'NavBar',
  components: {
    RoomManager: defineAsyncComponent(() => import('@/views/RoomManager.vue')),
    // MenuNew: defineAsyncComponent(() => import('@/views/MenuNew.vue')),

  },


}
</script>

<style lang="css" scoped>
.nav-bar {
  z-index: 2;
}
</style>
