<template>
  <div class="home">
    <h1>Adopt a new best friend</h1>
    <h2>{{ animalsCount }}</h2>
    <button class="btn btn-primary" @click="togglePetform">Add New Pet</button>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm" class="mt-4">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          placeholder="Enter Age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// from vuex
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      showPetForm: false,
      formData: {
        name: "",
        age: 0,
        species: null,
      },
    };
  },
  computed: {
    // mapGetters
    ...mapGetters(["animalsCount"]),
    ...mapState(["cats", "dogs"]),
  },
  methods: {
    // mapActions vuex
    ...mapActions(["addPet"]),
    togglePetform() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, name, age } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age,
        },
      };
      console.log("payload", payload);
      this.addPet(payload);
      console.log("after set vux cats", this.cats);
      console.log("after set vux dogs", this.dogs);

      //  reset form after submit
      this.formData = {
        name: "",
        age: 0,
        species: null,
      };
    },
  },
};
</script>
