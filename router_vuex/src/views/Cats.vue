<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table :fields="fields" :items="cats">
      <template #cell(name)="data">
        <a :href="`/pets/${data.index}`">{{ data.value }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
import cats from "@/datas/cats";
export default {
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
            let charArr = value.split("");
            let newCharArr = charArr.map((v, i) => {
              let char = i === 0 ? v.toUpperCase() : v;
              return char;
            });
            let newFormat = newCharArr.join("");
            return newFormat;
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
            let charArr = value.split("");
            let newCharArr = charArr.map((v, i) => {
              let char = i === 0 ? v.toUpperCase() : v;
              return char;
            });
            let newFormat = newCharArr.join("");
            return newFormat;
          },
        },
        {
          key: "weight",
          label: "Weight",
        },
      ],
      cats: cats,
    };
  },
};
</script>
