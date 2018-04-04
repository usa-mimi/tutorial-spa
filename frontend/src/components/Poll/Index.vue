<template>
  <div>
    polls
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PollIndex',
  methods: {
    fetchData () {
      axios.get('http://localhost:8000/api/1.0/questions/').then(res => {
        console.log(res)
      })
    },
  },
  mounted () {
    this.fetchData()
  },
}
</script>
