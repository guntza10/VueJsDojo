<template>
  <div>
    <PetTable species="Cats" :pets="cats" :fields="fields" />
  </div>
</template>

<script>
// import cats from "@/datas/cats";

// data from Vuex
import { mapState } from "vuex";
import PetTable from "@/components/PetTable";

export default {
  components: {
    PetTable,
  },
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Name",
          formatter: "fullName",
        },
        {
          key: "age",
          label: "Age",
          formatter: "fullName",
        },
        {
          key: "color",
          label: "Color",
        },
        {
          key: "location",
          label: "Location",
          formatter: (value) => {
            if (value) {
              let charArr = value.split("");
              let newCharArr = charArr.map((v, i) => {
                let char = i === 0 ? v.toUpperCase() : v;
                return char;
              });
              let newFormat = newCharArr.join("");
              return newFormat;
            }
            return value;
          },
        },
        {
          key: "notes",
          label: "Notes",
        },
        {
          key: "gender",
          label: "Gender",
          formatter: (value) => {
            if (value) {
              let charArr = value.split("");
              let newCharArr = charArr.map((v, i) => {
                let char = i === 0 ? v.toUpperCase() : v;
                return char;
              });
              let newFormat = newCharArr.join("");
              return newFormat;
            }
            return value;
          },
        },
        {
          key: "weight",
          label: "Weight",
        },
      ],
      // cats: cats,
    };
  },
  computed: {
    // mapState vuex
    ...mapState(["cats"]),
  },
};
</script>
