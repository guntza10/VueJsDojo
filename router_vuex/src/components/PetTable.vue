<template>
  <div>
    <h1>{{ species }} for Adoption</h1>
    <b-table :fields="fields" :items="pets">
      <template #cell(name)="data">
        <a :href="`/pets/cats/${data.index}`">{{ data.value }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array,
    fields: Array,
  },
};
</script>
