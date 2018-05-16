<template>
  <div>
    <v-form>
      <v-text-field
        v-model="username"
        label="ログインID"
        required></v-text-field>
      <v-text-field
        v-model="password"
        label="パスワード"
        required></v-text-field>
      <v-btn @click="submit">ログイン</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    submit () {
      alert('login')
    },
  },
}
</script>
