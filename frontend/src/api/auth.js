export default function (cli) {
  return {
    login (username, password) {
      const data = {
        username,
        password,
      }
      return cli.post('auth/', data)
    },
    verify (token) {
      return cli.post('auth/verify/', {token})
    },
  }
}
