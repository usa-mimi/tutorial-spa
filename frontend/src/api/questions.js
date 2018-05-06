export default function (cli) {
  return {
    list () {
      return cli.get('questions/')
    },
    vote (choiceId) {
      return cli.post(`choices/${choiceId}/vote/`)
    },
  }
}
