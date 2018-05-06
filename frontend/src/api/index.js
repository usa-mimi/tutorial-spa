import axios from 'axios'

import questions from './questions'

const client = axios.create({
  baseURL: process.env.API_ENDPOINT,
})

client.questions = questions(client)

client.install = function (Vue) {
  Object.defineProperty(Vue.prototype, '$request', {
    get () {
      return client
    },
  })
}

export default client
