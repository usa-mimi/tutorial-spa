<template>
  <v-app id="app">
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app>
      <router-link v-show="!isLoggedIn" :to="{name: 'Login'}">ログイン</router-link>
      <v-btn v-show="isLoggedIn" @click="logout">ログアウト</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  created () {
    this.tryLoggedIn()
  },
  methods: {
    ...mapActions(['login', 'logout', 'tryLoggedIn']),
  },
}
</script>

<style>
</style>
