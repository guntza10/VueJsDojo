<template>
  <div>
    <b-nav tabs>
      <b-nav-item diabled><b>Fancy Quiz App</b></b-nav-item>
      <b-nav-item diabled>Counter : {{ count }}/{{ countTotal }}</b-nav-item>
      <b-nav-item diabled>Corrected : {{ countCorrect }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    count: Number,
    countCorrect: Number,
    countTotal: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
