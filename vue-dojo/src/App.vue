<template>
  <div id="app">
    <Header
      :count="count"
      :countCorrect="countCorrect"
      :countTotal="countTotal"
    />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="question.length !== 0"
            :currentQuestion="question[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
  },
  data() {
    return {
      question: [],
      index: 0,
      count: 0,
      countCorrect: 0,
      countTotal: 0,
    };
  },
  mounted: function() {
    fetch("https://opentdb.com/api.php?amount=10&category=29&type=multiple", {
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        this.question = data.results;
        this.countTotal = this.question.length;
      });
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.countCorrect++;
      }
      this.count++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
