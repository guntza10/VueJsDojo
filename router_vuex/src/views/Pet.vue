<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <div>{{ animal.age }} years old</div>
    <div>{{ animal.color }}</div>
    <div>{{ animal.location }}</div>
    <div>{{ animal.notes }}</div>
    <div>{{ animal.gender }}</div>
    <div>{{ animal.weight }} Kg.</div>
  </div>
</template>

<script>
// data from Vuex
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {},
    };
  },
  computed: {
    // not recommend
    // cats() {
    //   return this.$store.state.cats;
    // },
    // dogs() {
    //   return this.$store.state.dogs;
    // },

    // best practice
    ...mapState(["cats", "dogs"]),

    // computed animal
    // animal() {
    //   const animals = this[this.$route.params.species]; // this['cats'] this.cats
    //   let animal = animals[this.$route.params.id];
    //   return animal;
    // },
  },
  mounted() {
    const animals = this[this.$route.params.species]; // this['cats'] this.cats
    this.animal = animals[this.$route.params.id];
  },
};
</script>
