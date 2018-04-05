<template>
  <div>
    <v-card>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs6 v-for="data in questions" :key="data.id">
            <v-card color="primary" class="white--text">
              <v-card-title primary-title>
                <div>{{ data.questionText }}</div>
              </v-card-title>
              <v-card-text>
                <div>{{ data.pubDate }}</div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PollIndex',
  data () {
    return {
      questions: [],
    }
  },
  methods: {
    fetchData () {
      axios.get('http://localhost:8000/api/1.0/questions/').then(res => {
        this.questions = res.data.results
      })
    },
  },
  mounted () {
    this.fetchData()
  },
}
</script>
