import axios from 'axios'

import auth from './auth'
import questions from './questions'

const client = axios.create({
  baseURL: process.env.API_ENDPOINT,
})

client.auth = auth(client)
client.questions = questions(client)

client.install = function (Vue) {
  Object.defineProperty(Vue.prototype, '$request', {
    get () {
      return client
    },
  })
}

export default client
