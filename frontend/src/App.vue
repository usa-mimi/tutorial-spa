<template>
  <v-app id="app">
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app>
      {{ isLoggedIn ? 'ログイン中' : 'ログアウト中' }}
      <v-btn @click="login">ログイン</v-btn>
      <v-btn @click="logout">ログアウト</v-btn>
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
  methods: {
    ...mapActions(['login', 'logout']),
  },
}
</script>

<style>
</style>
