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
              <v-card-text v-if="data.choices.length">
                 <v-radio-group v-model="vote">
                   <v-radio
                     v-for="choice in data.choices"
                     :key="choice.id"
                     :label="choice.choiceText + '  投票数: ' + choice.votes"
                     :value="choice.id">
                   </v-radio>
                 </v-radio-group>
                 <v-btn color="success">投票</v-btn>
              </v-card-text>
              <v-card-text>
                <div>{{ data.pubDate|printDate }}</div>
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
import moment from 'moment'

export default {
  name: 'PollIndex',
  data () {
    return {
      vote: null,
      questions: [],
    }
  },
  filters: {
    printDate (val) {
      return moment(val).locale('ja').format('YYYY年MM月DD日(ddd) HH時mm分ss秒')
    },
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
