<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template #lead>
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click="selectedAnswer(index)"
          :class="answerClass(index)"
          >{{ answer }}</b-list-group-item
        >
      </b-list-group>

      <b-button
        variant="primary"
        @click="submittedAnswer"
        :disabled="selectedIndex === null || isAnswered"
        >Submit</b-button
      >
      <b-button variant="success" @click="next" :disabled="!isAnswered"
        >Next</b-button
      >
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "QuestionBox",
  //   props: ["currentQuestion", "next"],
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      isAnswered: false,
    };
  },
  computed: {
    answers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      return answers;
    },
    correctAnswer() {
      return this.currentQuestion.correct_answer;
    },
  },
  // Approach 1 => มันจะทำแค่ครั้งเดียวคือตอนที่สร้างเสร็จแล้วจะไม่มาเรียกอีก
  mounted() {
    this.shuffleAnswers();
  },
  watch: {
    // Approach 1 => แต่จะมาทำที่ watch แทน เนื่องจาก props มีการเปลี่ยนแปลง
    // currentQuestion() {
    //   this.selectedIndex = null;
    //   this.shuffleAnswers();
    // },

    // Approach 2 => จะทำตั้งแต่เริ่มส่งค่า props มาครั้งแรกเลย ปกติมันจะทำก็ต่อเมื่อค่า props มีการเปลี่ยนแปลง แต่เราสามารถ config มันได้
    currentQuestion: {
      immediate: true, // การ set immediate เป็น true จะเป็นการ config ให้มันเรียกใช้ watcher ตั้งแต่ส่งค่า props เข้ามาครั้งแรกเลย
      handler() {
        // handler() เป็นส่วนที่เอาไว้จัดการ logic ต่างๆ
        this.selectedIndex = null;
        this.correctIndex = null;
        this.shuffleAnswers();
        this.isAnswered = false;
      },
    },
  },
  methods: {
    selectedAnswer(index) {
      console.log("index", index);
      this.selectedIndex = index;
    },
    submittedAnswer() {
      this.isAnswered = true;
      let isCorrect = false;
      if (this.selectedIndex === this.findCorrectIndex()) {
        isCorrect = true;
      }

      this.increment(isCorrect);
    },
    findCorrectIndex() {
      let correctIndx = this.shuffledAnswers.indexOf(this.correctAnswer);
      this.correctIndex = correctIndx;
      return correctIndx;
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      this.shuffledAnswers = _.shuffle(answers);
    },
    answerClass(index) {
      let answerClass =
        !this.isAnswered && this.selectedIndex === index
          ? "selected"
          : this.isAnswered && this.correctIndex === index
          ? "correct"
          : this.isAnswered &&
            this.selectedIndex === index &&
            this.correctIndex !== index
          ? "incorrect"
          : "";
      return answerClass;
    },
  },
};
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: green;
}

.incorrect {
  background-color: red;
}
</style>
