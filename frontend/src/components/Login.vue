<template>
  <div>
    <v-alert :value="nonFieldErrors.length" type="error">
      <div v-for="error in nonFieldErrors" :key="error">{{ error }}</div>
    </v-alert>
    <v-form v-model="valid">
      <v-text-field
        v-model="username"
        label="ログインID"
        :rules="usernameRules"
        required></v-text-field>
      <v-text-field
        v-model="password"
        label="パスワード"
        :append-icon="showPassword ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (showPassword = !showPassword)"
        :type="showPassword ? 'text' : 'password'"
        :rules="passwordRules"
        required></v-text-field>
      <v-btn :disabled="!valid" @click="submit">ログイン</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      valid: false,
      username: null,
      password: null,
      showPassword: false,
      nonFieldErrors: [],
      usernameRules: [
        v => !!v || 'ログインIDを入力してください',
      ],
      passwordRules: [
        v => !!v || 'パスワードを入力してください',
      ],
    }
  },
  methods: {
    submit () {
      this.nonFieldErrors = []
      this.$request.auth.login(this.username, this.password).then(res => {
        this.$request.defaults.headers.common['Authorization'] = `JWT ${res.data.token}`
        this.$router.push('/')
      }, err => {
        this.nonFieldErrors = err.response.data.nonFieldErrors
      })
    },
  },
}
</script>
